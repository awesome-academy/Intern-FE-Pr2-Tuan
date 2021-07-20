import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import QuantityAdjusment from './QuantityAdjusment';
import { removeCartItem, toggleModal } from '../../actions';
import { url } from '../../constants/config';

const CartDetail = (props) => {
    const cart = useSelector((state) => state.cart); 
    const { isShowCartDetail, toggleCartDetail } = props;
    const [isUser, setIsUser] = useState(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    let total = 0;
    let totalPrice = 0;
    cart.forEach((element) => {
        total += element.quantity;
        totalPrice += element.product.price * element.quantity;
    });

    const handleClick = (product) => {
        dispatch(removeCartItem(product));
    };

    const handleClickCheckout = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsUser(true);
        } else {
            dispatch(toggleModal());
        }
    };

    const showCartItems = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = cart.map((cartItem) => {
                return (
                    <div key={cartItem.product._id} className="cart-detail__item">
                        <QuantityAdjusment type="cart" cartItem={cartItem} />
                        <div className="cart-detail__item-img">
                            <img 
                                src={cartItem.product.img} 
                                alt="music book"
                                className="w-100 h-100" 
                            />
                        </div>
                        <div className="cart-detail__item-info">
                            <div className="cart-detail__item-info-title">{cartItem.product.name}</div>
                            <div className="cart-detail__item-info-price">${cartItem.product.price}</div>
                            <div className="cart-detail__item-info-quantity">{cartItem.quantity} pc(s)</div>
                        </div>
                        <div className="cart-detail__item-totalprice">${cartItem.product.price * cartItem.quantity}</div>
                        <FontAwesomeIcon icon={faTimes} className="ml-4" onClick={() => handleClick(cartItem.product)} />
                    </div>
                );
            });
        }
        return result;
    };

    if (isUser) {
        return <Redirect to={url.checkout} />;
    }

    return (
        <div className={isShowCartDetail === true 
            ? 'cart-detail d-flex flex-column c-show' 
            : 'cart-detail d-flex flex-column'}
        >
            <div className="cart-detail__header">
                <div className="cart-detail__header-amount">
                    <FontAwesomeIcon className="mr-2" icon={faShoppingBag} />
                    <span className="mx-2">{total} {total < 2 ? 'Item' : 'Items'}</span>
                </div>
                <FontAwesomeIcon icon={faTimes} className="close" onClick={toggleCartDetail} />
            </div>
            <div className="cart-detail__body">
                {
                    cart.length === 0 && <span 
                    className="not-found" 
                    >
                        {t('cartdetail.notfound')}
                    </span>
                }
                {showCartItems(cart)}
            </div>
            <Link 
                to="/checkout" 
                className={
                    cart.length === 0 
                    ? 'cart-detail__footer disable-btn' 
                    : 'cart-detail__footer'
                }
                onClick={handleClickCheckout}
            >
                <span>{t('cartdetail.checkout')}</span>
                <div className="total d-flex align-items-center">
                    ${totalPrice}
                </div>
            </Link>
        </div>
    );
};

export default CartDetail;
