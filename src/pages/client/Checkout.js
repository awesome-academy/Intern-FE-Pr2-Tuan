import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutForm from '../../components/client/CheckoutForm';
import SiderBar from '../../components/client/SiderBar';
import MainLayout from '../../components/MainLayout/MainLayout';

const Checkout = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <MainLayout classname="checkout-page">
            <div className="checkout user-container">
                <SiderBar />
                <CheckoutForm cart={cart} />
            </div>
        </MainLayout>
    );
};

export default Checkout;
