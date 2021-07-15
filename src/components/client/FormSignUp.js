import React, { useState } from 'react';
import { 
    Form, 
    FormGroup, 
    Label, Input, 
    Button, 
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { OpenFormSignIn } from '../../actions';
import callApi from '../../utils/apiCaller';
import { regex } from '../../constants/regex';

const FormSignUp = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputvalue] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        phone: '',
    });
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [errorCallApi, setErrorCallApi] = useState('');
    const { t } = useTranslation();

    const validateFn = (inputValue, info) => {
        if (info === 'phone') {
            if (inputValue !== '') {
                if (regex.phone.test(inputValue) === false) {
                    return 'Your phone number is not in the correct format!';
                }
            } else {
                return 'Phone number is required.';
            }
        } else if (info === 'email') {
            if (inputValue !== '') {
                if (regex.email.test(inputValue) === false) {
                    return 'Your email is not valid.';
                }
            }
        } else {
            if (!inputValue) {
                return `The ${info} field is required.`;
            }
            if (inputValue.length < 6) {
                return `${info.charAt(0).toUpperCase() + info.slice(1)} must be at least 6 characters.`;
            }
            return '';
        }

        return '';
    };

    const validate = (name, email, password, address, phone) => {
        const nameError = validateFn(name, 'name');
        const emailError = validateFn(email, 'email');
        const passwordError = validateFn(password, 'password');
        const addressError = validateFn(address, 'address');
        const phoneError = validateFn(phone, 'phone');
        if (nameError || emailError || passwordError || addressError || phoneError) {
            setEmailError(emailError);
            setPasswordError(passwordError);
            setNameError(nameError);
            setAddressError(addressError);
            setPhoneError(phoneError);
            return false;
        }
        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputvalue({
            ...inputValue,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        const { 
            name, 
            email, 
            password, 
            address, 
            phone, 
        } = inputValue;
        const userInfo = {
            name,
            email,
            password,
            address,
            phone,
        };
        e.preventDefault();
        const isValidate = validate(name, email, password, address, phone);
        if (isValidate) {
            callApi('api/auth/sign-up', 'POST', userInfo).then(() => {
                dispatch(OpenFormSignIn());
            }).catch((error) => setErrorCallApi(error.response.data.message));
        }
    };

    return (
        <div className="form-signin">
            <div className="form-signin__header text-center">
                <h1>{t('modal.login.headtitle')}</h1>
                <p>{t('modal.login.subtitle')}</p>
            </div>
            {errorCallApi && <div style={{
                color: 'rgb(97, 26, 21)',
                backgroundColor: 'rgb(253, 236, 234)',
                textAlign: 'center',
                padding: '15px',
                borderRadius: '4px',
            }}
            >
                {errorCallApi}
            </div>}
            <Form onSubmit={onSubmit}>
                <FormGroup className="mb-3">
                    <Label className="mb-1" for="Name">{t('modal.signup.name')}</Label>
                    <Input type="text" name="name" id="Name" value={inputValue.name} onChange={handleChange} />
                    {nameError && <div className="validation">{nameError}</div>}
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label className="mb-1" for="Email">{t('modal.signup.email')}</Label>
                    <Input type="email" name="email" id="Email" value={inputValue.email} onChange={handleChange} />
                    {emailError && <div className="validation">{emailError}</div>}
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label className="mb-1" for="Password">{t('modal.signup.password')}</Label>
                    <Input type="password" name="password" id="Password" value={inputValue.password} onChange={handleChange} />
                    {passwordError && <div className="validation">{passwordError}</div>}
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label className="mb-1" for="Address">{t('modal.signup.address')}</Label>
                    <Input type="text" name="address" id="Address" value={inputValue.address} onChange={handleChange} />
                    {addressError && <div className="validation">{addressError}</div>}
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label className="mb-1" for="Phone">{t('modal.signup.phone')}</Label>
                    <Input type="text" name="phone" id="Phone" value={inputValue.phone} onChange={handleChange} />
                    {phoneError && <div className="validation">{phoneError}</div>}
                </FormGroup>
                <Button size="lg" block type="submit" className="btn">{t('modal.signup.continue')}</Button>
            </Form>
            <div className="form-signin__footer">
                {t('modal.signup.haveaccount')}
                &nbsp;
                <span 
                className="btn-signup" 
                onClick={() => dispatch(OpenFormSignIn())}
                >
                    {t('modal.signup.signin')}
                </span>
            </div>
        </div>
    );
};

export default FormSignUp;
