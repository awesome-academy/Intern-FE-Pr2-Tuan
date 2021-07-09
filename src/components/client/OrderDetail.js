import React from 'react';
import { Table } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const OrderDetail = () => {
    const { t } = useTranslation();

    return (
        <div className="order-detail d-flex flex-column flex-grow-1">
            <h3 className="order-detail__title">{t('orders.orderdetail')}</h3>
            <div className="order-detail__content">
                <div className="detail">
                    <div className="address">
                        <div className="address__title">{t('orders.address')}</div>
                        <span>2 Minh Khai</span>
                        <div className="address__title mt-4">{t('orders.paymentmethod')}</div>
                        <span>Cash On Delivery</span>
                    </div>
                    <div className="amount-info">
                        <div className="amount-info__title">
                            {t('orders.subtotal')}
                            <span>$99</span>
                        </div>
                        <div className="amount-info__title">
                            {t('orders.discount')}
                            <span>$0.00</span>
                        </div>
                        <div className="amount-info__title">
                            {t('orders.free')}
                            <span>$0.00</span>
                        </div>
                        <div className="amount-info__title">
                            {t('orders.total')}
                            <span>$99</span>
                        </div>
                    </div>
                </div>
                <div className="order-item">
                    <Table>
                        <thead>
                            <tr>
                            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                                <th></th>
                                <th>{t('orders.item')}</th>
                                <th>{t('orders.quantity')}</th>
                                <th>{t('orders.price')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div className="img-wrapper">
                                        <img 
                                            src="https://s3.amazonaws.com/redqteam.com/pickbazar/books/music_school.png" 
                                            alt="book"
                                            className="w-100 h-100" 
                                        />
                                    </div>
                                </th>
                                <td>
                                    <div className="name">Whiskey</div>
                                    <div className="price">$45</div>
                                </td>
                                <td>
                                    1
                                </td>
                                <td>$45</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div className="img-wrapper">
                                        <img 
                                            src="https://s3.amazonaws.com/redqteam.com/pickbazar/books/music_school.png" 
                                            alt="book"
                                            className="w-100" 
                                        />
                                    </div>
                                </th>
                                <td>
                                    <div className="name">Whiskey</div>
                                    <div className="price">$45</div>
                                </td>
                                <td>
                                    1
                                </td>
                                <td>$45</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div className="img-wrapper">
                                        <img 
                                            src="https://s3.amazonaws.com/redqteam.com/pickbazar/books/music_school.png" 
                                            alt="book"
                                            className="w-100" 
                                        />
                                    </div>
                                </th>
                                <td>
                                    <div className="name">Whiskey</div>
                                    <div className="price">$45</div>
                                </td>
                                <td>
                                    1
                                </td>
                                <td>$45</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
