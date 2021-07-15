import React from 'react';
import { useTranslation } from 'react-i18next';

const Order = (props) => {
    const { 
        order, 
        index, 
        getIndexOrderSelected, 
        indexOrderSelected,
    } = props;
    const { t } = useTranslation();

    return (
        <div 
            className={
                indexOrderSelected === index 
                ? 'orders-list__item active' 
                : 'orders-list__item'
            } 
            onClick={() => getIndexOrderSelected(index)}
        >
            <div className="w-100">
                <div className="orders-list__item-header">{t('orders.order')}#{index + 1}</div>
                <div className="orders-list__item-body">
                    <div className="orders-list__item-body-info d-flex justify-content-between">
                        {t('orders.date')}:
                        <span>{order.date}</span>
                    </div>
                    <div className="orders-list__item-body-info d-flex justify-content-between">
                        {t('orders.id')}:
                        <span>{order._id}</span>
                    </div>
                    <div className="orders-list__item-body-info d-flex justify-content-between">
                        {t('orders.totalprice')}:
                        <span>${order.totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
