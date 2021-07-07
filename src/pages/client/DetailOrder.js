import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import MainLayout from '../../components/MainLayout/MainLayout';

const DetailOrder = () => {
    const { t } = useTranslation();

    return (
        <MainLayout classname="detail-order d-flex">
            <div className="user-container mx-auto">
                <div className="user-wrapper">
                    <div className="btn-back d-flex justify-content-end mb-4">
                        <Button style={{ backgroundColor: 'transparent' }}>
                            <Link to="/">{t('ordersuccess.back')}</Link>
                        </Button>
                    </div>
                    <div className="order-received mb-5">
                        <h3 className="order-received__headtitle bt-header">{t('ordersuccess.ordersuccess')}</h3>
                        <p className="mb-4 order-received__thank">{t('ordersuccess.thank')}</p>
                        <div className="order-received__info d-flex justify-content-between">
                            <div className="info-order">
                                <div className="info-header">{t('ordersuccess.orderid')}</div>
                                <p>60e31941fae698abe416f13d</p>
                            </div>
                            <div className="info-order">
                                <div className="info-header">{t('ordersuccess.date')}</div>
                                <p>2021-7-5</p>
                            </div>
                            <div className="info-order">
                                <div className="info-header">{t('ordersuccess.total')}</div>
                                <p>$185</p>
                            </div>
                            <div className="info-order">
                                <div className="info-header">{t('ordersuccess.paymentmethod')}</div>
                                <p>Cash On Delivery</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail mb-5">
                        <h3 className="bt-header">{t('ordersuccess.orderdetail')}</h3>
                        <div className="detail-info d-flex align-items-center mb-3">
                            <div className="info-header m-0">{t('ordersuccess.totalitem')}</div>
                            <p>2 Items</p>
                        </div>
                        <div className="detail-info d-flex align-items-center mb-3">
                            <div className="info-header m-0">{t('ordersuccess.ordertime')}</div>
                            <p>2021-7-5</p>
                        </div>
                        <div className="detail-info d-flex align-items-center mb-3">
                            <div className="info-header m-0">{t('ordersuccess.location')}</div>
                            <p>2 Minh khai</p>
                        </div>
                    </div>
                    <div className="amount detail">
                        <h3 className="bt-header">{t('ordersuccess.totalamount')}</h3>
                        <div className="detail-info d-flex align-items-center mb-3">
                            <div className="info-header m-0">{t('ordersuccess.subtotal')}</div>
                            <p>$185</p>
                        </div>
                        <div className="detail-info d-flex align-items-center mb-3">
                            <div className="info-header m-0">{t('ordersuccess.paymentmethod')}</div>
                            <p>Cash On Delivery</p>
                        </div>
                        <div className="detail-info d-flex align-items-center mb-3">
                            <div className="info-header m-0">{t('ordersuccess.total')}</div>
                            <p>$185</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default DetailOrder;
