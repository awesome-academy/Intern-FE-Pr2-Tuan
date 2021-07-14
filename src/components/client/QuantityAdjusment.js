import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseCartItem } from '../../actions';

const QuantityAdjusment = (props) => {
    const { type, cartItem } = props;
    const dispatch = useDispatch();

    return (
        <div className={type === 'cart' ? 'quantityAdjustment cart-style' : 'quantityAdjustment'}>
            <div className="decrease adj px-1" onClick={() => dispatch(decreaseCartItem(cartItem.product))}>
                <FontAwesomeIcon icon={faMinus} />
            </div>
            <div className="number">{cartItem.quantity}</div>
            <div className="increase adj px-1" onClick={() => dispatch(addToCart(cartItem.product))}>
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </div>
    );
};

export default QuantityAdjusment;
