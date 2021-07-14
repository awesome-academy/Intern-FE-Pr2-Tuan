import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Cart = (props) => {
    const [total, setTotal] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const { toggleCartDetail } = props;
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        if (cart.length > 0) {
            let total = null;
            let totalPrice = null;
            cart.forEach((element) => {
                total += element.quantity;
                totalPrice += element.product.price * element.quantity;
            });
            setTotal(total);
            setTotalPrice(totalPrice);
        } else {
            setTotal(0);
            setTotalPrice(0);
        } 
    }, [cart]);

    return (
        <section className="cart" onClick={toggleCartDetail}>
            <div className="cart__item-amount px-2">
                <FontAwesomeIcon icon={faShoppingBag} />
                {total} {total < 2 ? 'Item' : 'Items'}
            </div>
            <div className="cart__total-price px-2">
                <p>
                    ${totalPrice}
                </p>
            </div>
        </section>
    );
};

export default Cart;
