import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    return (
        <section className="cart">
            <div className="cart__item-amount px-2">
                <FontAwesomeIcon icon={faShoppingBag} />
                0 item
            </div>
            <div className="cart__total-price px-2">
                <p>
                    $0
                </p>
            </div>
        </section>
    );
};

export default Cart;
