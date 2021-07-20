import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import MainLayout from '../../components/MainLayout/MainLayout';
import callApi from '../../utils/apiCaller';
import { endpoint } from '../../constants/endpoint';

const DetailOrder = () => {
    const [orderInfo, setOrderInfo] = useState({}); 
    const { id } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        const getOrder = async (id) => {
            const res = await callApi(`${endpoint.order}/${id}`);
            setOrderInfo(res.data);
        };
        getOrder(id);
    }, [id]);

    const totalQuantity = (carts) => {
        let total = null;
        carts.forEach((cartItem) => {
            total += cartItem.quantity;
        });
        return total;
    };

    let total = null;
    if (Object.keys(orderInfo).length !== 0) {
        total = totalQuantity(orderInfo.cartItem);
    }

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
                                <p>{orderInfo._id}</p>
                            </div>
                            <div className="info-order">
                                <div className="info-header">{t('ordersuccess.date')}</div>
                                <p>{orderInfo.date}</p>
                            </div>
                            <div className="info-order">
                                <div className="info-header">{t('ordersuccess.total')}</div>
                                <p>${orderInfo.totalPrice}</p>
                            </div>
                            <div className="info-order">
                                <div className="info-header">{t('ordersuccess.paymentmethod')}</div>
                                <p>{orderInfo.payment === 'cash' ? 'Cash on Delivery' : 'Online Payment'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail mb-5">
                        <h3 className="bt-header">{t('ordersuccess.orderdetail')}</h3>
                        <div className="detail-info d-flex align-items-center mb-3">
                            <div className="info-header m-0">{t('ordersuccess.totalitem')}</div>
                            <p>{total} {total > 2 ? 'Items' : 'Item'}</p>
                        </div>
                        <div className="detail-info d-flex align-items-center mb-3">
                            <div className="info-header m-0">{t('ordersuccess.ordertime')}</div>
                            <p>{orderInfo.date}</p>
                        </div>
                        <div className="detail-info d-flex align-items-center mb-3">
                            <div className="info-header m-0">{t('ordersuccess.location')}</div>
                            <p>{orderInfo.address}</p>
                        </div>
                    </div>
                    <div className="amount detail">
                        <h3 className="bt-header">{t('ordersuccess.totalamount')}</h3>
                        <div className="detail-info d-flex align-items-center mb-3">
                            <div className="info-header m-0">{t('ordersuccess.subtotal')}</div>
                            <p>${orderInfo.totalPrice}</p>
                        </div>
                        <div className="detail-info d-flex align-items-center mb-3">
                            <div className="info-header m-0">{t('ordersuccess.paymentmethod')}</div>
                            <p>{orderInfo.payment === 'cash' ? 'Cash on Delivery' : 'Online Payment'}</p>
                        </div>
                        <div className="detail-info d-flex align-items-center mb-3">
                            <div className="info-header m-0">{t('ordersuccess.total')}</div>
                            <p>${orderInfo.totalPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default DetailOrder;
