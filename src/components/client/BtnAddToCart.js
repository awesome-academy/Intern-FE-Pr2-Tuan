import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../actions';
import QuantityAdjusment from './QuantityAdjusment';

const BtnAddToCart = (props) => {
    const [cartItem, setCartItem] = useState({});
    const cart = useSelector((state) => state.cart);
    const { type, productDetail } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (Object.keys(productDetail).length !== 0) {
            // eslint-disable-next-line max-len
            const cartItemFinded = cart.find((element) => element.product._id === productDetail._id);
            if (cartItemFinded) {
                setCartItem(cartItemFinded);
            } else {
                setCartItem({});
            }
        }
    }, [cart, productDetail, productDetail._id]);

    const handleClick = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="btn-add">
            {
                Object.keys(cartItem).length !== 0
                ?   <QuantityAdjusment cartItem={cartItem} /> 
                :   <button 
                        className={
                            type === 'related' 
                            ? 'btn d-flex align-items-center related' 
                            : 'btn d-flex justify-content-center align-items-center'
                        }
                        onClick={() => handleClick(productDetail)}
                >
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        {
                            type === 'related' 
                            ? <p className="m-0">{t('btn.add')}</p> 
                            : <p className="m-0">{t('btn.addtocart')}</p>
                        }
                    </button>
            }
        </div>
    );
};

export default BtnAddToCart;
