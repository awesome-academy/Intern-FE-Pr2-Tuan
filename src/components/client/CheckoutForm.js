import React, { useState } from 'react';
import { 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Button, 
} from 'reactstrap';
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const CheckoutForm = () => {
    const [inputValue, setInputValue] = useState({
        name: 'Tuan Do',
        email: 'doanhtuan@gmail.com',
        address: '2 Minh Khai',
        phone: '0963585663',
        payment: '',
    });
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if (error) {
            setError(error.response.data.message);
        }
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };
 
    return (
        <div className="checkout-form">
            <div className="order-info">
                <h3 className="order-info__headtitle">{t('checkoutpage.yourorder')}</h3>
                <div className="order-info__item d-flex justify-content-between">
                    <div className="order-info__item-title">{t('checkoutpage.subtotal')}</div>
                    <div className="order-info__item-price">$94</div>
                </div>
                <div className="order-info__item d-flex justify-content-between">
                    <div className="order-info__item-title">{t('checkoutpage.shipping')}</div>
                    <div className="order-info__item-price">$0.00</div>
                </div>
                <div className="order-info__item d-flex justify-content-between">
                    <div className="order-info__item-title">{t('checkoutpage.total')}</div>
                    <div className="order-info__item-price">$94</div>
                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <div className="billing-address">
                    <h3 className="billing-address__title">{t('checkoutpage.billaddress')}</h3>
                    <FormGroup>
                        <Label for="name">{t('checkoutpage.name')}</Label>
                        <Input type="text" name="text" id="name" autoComplete="off" value={inputValue.name} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" value={inputValue.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">{t('checkoutpage.address')}</Label>
                        <Input type="text" name="address" id="address" value={inputValue.address} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">{t('checkoutpage.phone')}</Label>
                        <Input type="text" name="phone" id="phone" value={inputValue.phone} />
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
                <Button type="submit" className="btn w-100" disabled={!stripe}>{t('checkoutpage.proceedcheckout')}</Button>
            </Form>
        </div>
    );
};

export default CheckoutForm;
