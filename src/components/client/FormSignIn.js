import React, { useState } from 'react';
import { 
    Form, 
    FormGroup, 
    Label, Input, 
    Button, 
} from 'reactstrap';
import { useTranslation } from 'react-i18next';

const FormSignIn = () => {
    const [inputValue, setInputvalue] = useState({
        email: '',
        password: '',
    });
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { t } = useTranslation();

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setInputvalue({
            ...inputValue,
            [name]: value,
        });
    };

    const validateFnc = (email, password) => {
        let emailError = '';
        let passwordError = '';

        if (!email) {
            emailError = 'The email field is required.';
        }

        if (!password) {
            passwordError = 'The password field is required.';
        }

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
        const isValidate = validateFnc(email, password);
        if (isValidate) {
            console.log('call api');
        } else {
            console.log('show errr');
        }
    };

    return (
        <div className="form-signin">
            <div className="form-signin__header text-center">
                <h1>{t('modal.login.headtitle')}</h1>
                <p>{t('modal.login.subtitle')}</p>
            </div>
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
                &nbsp;<span className="btn-signup">{t('modal.login.signup')}</span>
            </div>
        </div>
    );
};

export default FormSignIn;
