import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Order from '../../components/client/Order';
import OrderDetail from '../../components/client/OrderDetail';
import SiderBar from '../../components/client/SiderBar';
import MainLayout from '../../components/MainLayout/MainLayout';
import callApi from '../../utils/apiCaller';
import { endpoint } from '../../constants/endpoint';

const Orders = () => {
    const user = useSelector((state) => state.user);
    const { t } = useTranslation();
    const [orders, setOrders] = useState([]);
    const [indexOrderSelected, setIndexOrderSelected] = useState(0);

    useEffect(() => {
        callApi(`${endpoint.order}?email=${user.email}`, 'GET', null).then((res) => {
            setOrders(res.data);
        });
    }, [user.email]);

    const getIndexOrderSelected = (index) => {
        setIndexOrderSelected(index);
    };

    const showOrders = (orders) => {
        let result = null;
        if (orders.length > 0) {
            result = orders.map((order, index) => {
                return <Order 
                    key={order._id} 
                    order={order} 
                    index={index} 
                    indexOrderSelected={indexOrderSelected}
                    getIndexOrderSelected={getIndexOrderSelected} 
                />;
            });
        }
        return result; 
    };
 
    return ( 
        <MainLayout classname="orders-page">
            <div className="orders-page-content">
                <div className="side-bar">
                    <SiderBar />
                </div>
                <div className="orders-container d-flex flex-grow-1">
                    <div className="orders-list mx-4">
                        <h3 className="orders-list__title">{t('orders.myorders')}</h3>
                        {showOrders(orders)}
                    </div>
                    <OrderDetail orders={orders} indexOrderSelected={indexOrderSelected} />
                </div>
            </div>
        </MainLayout>
    );
};

export default Orders;
