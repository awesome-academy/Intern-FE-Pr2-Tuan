import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
    Button, Form,
    FormGroup, Input, Label,
} from 'reactstrap';
import { login, OpenFormSignUp } from '../../actions';
import { endpoint } from '../../constants/endpoint';
import { regex } from '../../constants/regex';
import callApi from '../../utils/apiCaller';

const FormSignIn = (props) => {
    const dispatch = useDispatch();
    const { closeModal } = props;
    const [inputValue, setInputvalue] = useState({
        email: '',
        password: '',
    });
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errorCallApi, setErrorCallApi] = useState('');
    const { t } = useTranslation();
    const notify = () => toast.success('Login Success');

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setInputvalue({
            ...inputValue,
            [name]: value,
        });
    };

    const validateFn = (inputValue, info) => {
        if (!inputValue) {
            return `The ${info} field is required.`;
        }
        if (info === 'password') {
            if (inputValue.length < 6) {
                return `${info.charAt(0).toUpperCase() + info.slice(1)} must be at least 5 characters.`;
            }
        }
        if (info === 'email') {
            if (inputValue !== '') {
                if (regex.email.test(inputValue) === false) {
                    return 'Your email is not valid.';
                }
            }
        }
        return '';
    };

    const validate = (email, password) => {
        const emailError = validateFn(email, 'email');
        const passwordError = validateFn(password, 'password');
        if (emailError || passwordError) {
            setEmailError(emailError);
            setPasswordError(passwordError);
            return false;
        }
        return true;
    };

    const onSubmit = (e) => {
        const { email, password } = inputValue;
        e.preventDefault();
        const isValidate = validate(email, password);
        if (isValidate) {
            const account = {
                email,
                password,
            };
            callApi(endpoint.signin, 'POST', account).then((res) => {
                dispatch(login(res.data));
                closeModal();
                notify();
            }).catch((error) => {
                setErrorCallApi(error.response.data.message);
            });
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
                borderRadius: '4px',
                padding: '15px',
                textAlign: 'center',
            }}
            >
                {errorCallApi}
            </div>}
            <Form onSubmit={onSubmit}>
                <FormGroup className="mb-3">
                    <Label className="mb-1" for="Email">{t('modal.login.email')}</Label>
                    <Input type="email" name="email" id="Email" placeholder="EX: doanhtuan@gmail.com" value={inputValue.email} onChange={handleChange} />
                    {emailError && <div className="validation">{emailError}</div>}
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label className="mb-1" for="Password">{t('modal.login.password')}</Label>
                    <Input type="password" name="password" id="Password" placeholder="EX: tuan123" value={inputValue.password} onChange={handleChange} />
                    {passwordError && <div className="validation">{passwordError}</div>}
                </FormGroup>
                <Button size="lg" block type="submit" className="btn">{t('modal.login.continue')}</Button>
            </Form>
            <div className="form-signin__footer">
                {t('modal.login.dontaccount')}
                &nbsp;
                <span className="btn-signup" onClick={() => dispatch(OpenFormSignUp())}>{t('modal.login.signup')}</span>
            </div>
        </div>
    );
};

export default FormSignIn;
