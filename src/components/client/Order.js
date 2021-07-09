import React from 'react';
import { useTranslation } from 'react-i18next';

const Order = () => {
    const { t } = useTranslation();
    return (
        <div className="orders-list__item">
            <div className="w-100">
                <div className="orders-list__item-header">{t('orders.order')}#1</div>
                <div className="orders-list__item-body">
                    <div className="orders-list__item-body-info d-flex justify-content-between">
                        {t('orders.date')}:
                        <span>2020-9-4</span>
                    </div>
                    <div className="orders-list__item-body-info d-flex justify-content-between">
                        {t('orders.id')}:
                        <span>5f525a52a4d34a7e580b718c</span>
                    </div>
                    <div className="orders-list__item-body-info d-flex justify-content-between">
                        {t('orders.totalprice')}:
                        <span>$94</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
