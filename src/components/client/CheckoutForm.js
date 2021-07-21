import { faCreditCard, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    CardElement,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';
import { removeCart } from '../../actions';
import callApi from '../../utils/apiCaller';
import { endpoint } from '../../constants/endpoint';

const CheckoutForm = (props) => {
    const { cart } = props;
    const user = useSelector((state) => state.user);
    const [inputValue, setInputValue] = useState({
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        payment: '',
    });
    const [idOrder, setIdOrder] = useState('');
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const notifyOrder = () => toast.success('Order Success');
    const notifyCheckout = () => toast.success('Checkout Success');

    const totalQuantity = (cart) => {
        let total = null;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };

    const totalPrice = (cart) => {
        let total = null;
        cart.forEach((item) => {
            total += item.product.price * item.quantity;
        });
        return total;
    };
    
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const today = new Date();
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        const order = {
            ...inputValue,
            date,
            totalPrice: totalPrice(cart),
            cartItem: [...cart],
        };
        if (inputValue.payment === 'cash') {
            const res = await callApi(endpoint.order, 'POST', order);
            dispatch(removeCart());
            setIdOrder(res.data._id);
            notifyOrder();
        } else if (inputValue.payment === 'card') {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
            });
            if (error) {
                setError(error.response.data.message);
            } else {
                const { id } = paymentMethod;
                const res = await callApi(endpoint.charge, 'POST', { id, amount: order.totalPrice * 100, order });
                if (res.status === 200) {
                    const res = await callApi(endpoint.order, 'POST', order);
                    dispatch(removeCart());
                    setIdOrder(res.data._id);
                    notifyCheckout();
                }
            }
        }    
    };

    if (idOrder) {
        return <Redirect to={`/detail-order/${idOrder}`} />;
    }
 
    return (
        <div className="checkout-form">
            <div className="order-info">
                <h3 className="order-info__headtitle">{t('checkoutpage.yourorder')}</h3>
                <div className="order-info__item d-flex justify-content-between">
                    <div className="order-info__item-title">{t('checkoutpage.subtotal')} ({totalQuantity(cart)})</div>
                    <div className="order-info__item-price">${totalPrice(cart)}</div>
                </div>
                <div className="order-info__item d-flex justify-content-between">
                    <div className="order-info__item-title">{t('checkoutpage.shipping')}</div>
                    <div className="order-info__item-price">$0.00</div>
                </div>
                <div className="order-info__item d-flex justify-content-between">
                    <div className="order-info__item-title">{t('checkoutpage.total')}</div>
                    <div className="order-info__item-price">${totalPrice(cart)}</div>
                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <div className="billing-address">
                    <h3 className="billing-address__title">{t('checkoutpage.billaddress')}</h3>
                    <FormGroup>
                        <Label for="name">{t('checkoutpage.name')}</Label>
                        <Input 
                            type="text" 
                            name="name" 
                            id="name" 
                            autoComplete="off" 
                            value={inputValue.name}
                            onChange={handleChangeInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={inputValue.email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">{t('checkoutpage.address')}</Label>
                        <Input 
                            type="text" 
                            name="address" 
                            id="address" 
                            value={inputValue.address} 
                            onChange={handleChangeInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">{t('checkoutpage.phone')}</Label>
                        <Input 
                            type="text" 
                            name="phone" 
                            id="phone" 
                            value={inputValue.phone} 
                            onChange={handleChangeInput}
                        />
                    </FormGroup>
                </div>
                <div className="payment">
                    <h3 className="payment__title">{t('checkoutpage.selectoption')}</h3>
                    <FormGroup className="d-flex justify-content-between mb-3 p-0">
                        <Input
                            type="radio"
                            id="cash"
                            name="payment"
                            value="cash"
                            onChange={handleChangeInput}
                            autoComplete="off"
                        />
                        <Label for="cash" check>
                            <FontAwesomeIcon icon={faMoneyBillAlt} />
                            <span>{t('checkoutpage.cash')}</span>
                        </Label>
                        <Input
                            type="radio"
                            id="card"
                            name="payment"
                            value="card"
                            onChange={handleChangeInput}
                            autoComplete="off"
                        />{' '}
                        <Label for="card" check>
                            <FontAwesomeIcon icon={faCreditCard} />
                            <span>{t('checkoutpage.card')}</span>
                        </Label>
                    </FormGroup>
                </div>
                {inputValue.payment === 'card' && <CardElement />}
                {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '5px' }}>{error}</p>}
                <Button 
                    type="submit" 
                    className={cart.length === 0 ? 'btn w-100 disable-btn' : 'btn w-100'}
                    disabled={!stripe}
                >
                    {t('checkoutpage.proceedcheckout')}
                </Button>
            </Form>
        </div>
    );
};

export default CheckoutForm;
