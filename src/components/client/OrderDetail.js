import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const OrderDetail = (props) => {
    const { orders, indexOrderSelected } = props;
    const [orderInfo, setOrderInfo] = useState({});
    const [cartItem, setCartItem] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        if (orders.length > 0) {
            const orderInfo = orders[indexOrderSelected];
            const cartItem = orderInfo.cartItem;
            setOrderInfo({ ...orderInfo });
            setCartItem([...cartItem]);
        }
    }, [indexOrderSelected, orders]);

    const showCartItem = (cartItem) => {
        let result = null;
        if (cartItem.length > 0) {
            result = cartItem.map((item, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">
                            <div className="img-wrapper">
                                <img 
                                    src={item.product.img} 
                                    alt="book"
                                    className="w-100 h-100" 
                                />
                            </div>
                        </th>
                        <td>
                            <div className="name">{item.product.name}</div>
                            <div className="price">${item.product.price}</div>
                        </td>
                        <td>
                            {item.quantity}
                        </td>
                        <td>${item.product.price * item.quantity}</td>
                    </tr>
                );
            });
        }
        return result;
    };

    return (
        <div className="order-detail d-flex flex-column flex-grow-1">
            <h3 className="order-detail__title">{t('orders.orderdetail')}</h3>
            <div className="order-detail__content">
                <div className="detail">
                    <div className="address">
                        <div className="address__title">{t('orders.address')}</div>
                        <span>{orderInfo.address}</span>
                        <div className="address__title mt-4">{t('orders.paymentmethod')}</div>
                        <span>{orderInfo.payment === 'cash' ? 'Cash on Delivery' : 'Online Payment'}</span>
                    </div>
                    <div className="amount-info">
                        <div className="amount-info__title">
                            {t('orders.subtotal')}
                            <span>${orderInfo.totalPrice}</span>
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
                            <span>${orderInfo.totalPrice}</span>
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
                            {showCartItem(cartItem)}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
