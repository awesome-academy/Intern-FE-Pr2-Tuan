import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import QuantityAdjusment from './QuantityAdjusment';

const CartDetail = (props) => {
    const { isShowCartDetail, toggleCartDetail } = props;
    const cart = [1, 2];
    const { t } = useTranslation();

    return (
        <div className={isShowCartDetail === true 
            ? 'cart-detail d-flex flex-column c-show' 
            : 'cart-detail d-flex flex-column'}
        >
            <div className="cart-detail__header">
                <div className="cart-detail__header-amount">
                    <FontAwesomeIcon className="mr-2" icon={faShoppingBag} />
                    <span className="mx-2">1 Item</span>
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
                <div className="cart-detail__item">
                    <QuantityAdjusment type="cart" />
                    <div className="cart-detail__item-img">
                        <img 
                            src="https://s3.amazonaws.com/redqteam.com/pickbazar/books/music_school.png" 
                            alt="music book"
                            className="w-100 h-100" 
                        />
                    </div>
                    <div className="cart-detail__item-info">
                        <div className="cart-detail__item-info-title">The Grimstones</div>
                        <div className="cart-detail__item-info-price">$99</div>
                        <div className="cart-detail__item-info-quantity">1 pc(s)</div>
                    </div>
                    <div className="cart-detail__item-totalprice">$99</div>
                    <FontAwesomeIcon icon={faTimes} className="ml-4" onClick={() => setIsShow(false)} />
                </div>
            </div>
            <Link to="/checkout" className={cart.length === 0 ? 'cart-detail__footer disable-btn' : 'cart-detail__footer'}>
                <span>{t('cartdetail.checkout')}</span>
                <div className="total d-flex align-items-center">
                    $99
                </div>
            </Link>
        </div>
    );
};

export default CartDetail;
