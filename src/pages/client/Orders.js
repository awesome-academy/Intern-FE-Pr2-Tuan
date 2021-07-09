import React from 'react';
import { useTranslation } from 'react-i18next';
import Order from '../../components/client/Order';
import OrderDetail from '../../components/client/OrderDetail';
import SiderBar from '../../components/client/SiderBar';
import MainLayout from '../../components/MainLayout/MainLayout';

const Orders = () => {
    const { t } = useTranslation();

    return ( 
        <MainLayout classname="orders-page">
            <div className="orders-page-content">
                <div className="side-bar">
                    <SiderBar />
                </div>
                <div className="orders-container d-flex flex-grow-1">
                    <div className="orders-list mx-4">
                        <h3 className="orders-list__title">{t('orders.myorders')}</h3>
                        {/* {this.showOrder(orders)} */}
                        <Order />
                        <Order />
                        <Order />
                        <Order />
                    </div>
                    <OrderDetail />
                </div>
            </div>
        </MainLayout>
    );
};

export default Orders;
