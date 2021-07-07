import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import SiderBar from '../../components/client/SiderBar';
import CheckoutForm from '../../components/client/CheckoutForm';

const Checkout = () => {
    return (
        <MainLayout classname="checkout-page">
            <div className="checkout user-container">
                <SiderBar />
                <CheckoutForm />
            </div>
        </MainLayout>
    );
};

export default Checkout;
