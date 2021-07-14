import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button, 
    Col, 
    Form,
    FormGroup, 
    Input, 
    Label, 
    Row,
} from 'reactstrap';
import SiderBar from '../../components/client/SiderBar';
import MainLayout from '../../components/MainLayout/MainLayout';
import { updateUser } from '../../actions';
import { regex } from '../../constants/regex';

const UserProfile = () => {
    const user = useSelector((state) => state.user);
    const [userInfo, setUserInfo] = useState({
        email: user.email,
        address: user.address,
        phone: user.phone,
        name: user.name,
    });
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handlechange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

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

    const validate = (name, email, address, phone) => {
        const nameError = validateFn(name, 'name');
        const emailError = validateFn(email, 'email');
        const addressError = validateFn(address, 'address');
        const phoneError = validateFn(phone, 'phone');
        if (nameError || emailError || addressError || phoneError) {
            setEmailError(emailError);
            setNameError(nameError);
            setAddressError(addressError);
            setPhoneError(phoneError);
            return false;
        }
        return true;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const {
            name,
            email,
            address,
            phone,
        } = userInfo;
        const isValidate = validate(name, email, address, phone);
        if (isValidate) {
            dispatch(updateUser(userInfo));
        }
    };

    return (
        <MainLayout classname="userprofile-page">
            <div className="user-profile user-container">
                <SiderBar />
                <div className="user-profile-content">
                    <div className="user-profile-content__head mb-4">
                        <h1 className="head-title">{t('userprofile.yourprofile')}</h1>
                    </div>
                    <Form className="user-profile-content__body" onSubmit={onSubmit}>
                        <Row className="mb-3">
                            <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">{t('userprofile.email')}</Label>
                                <Input 
                                    type="email" 
                                    name="email" 
                                    id="exampleEmail" 
                                    value={userInfo.email} 
                                    onChange={handlechange} 
                                />
                                {emailError && <div className="validation">{emailError}</div>}
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="Name">{t('userprofile.password')}</Label>
                                <Input 
                                    type="text" 
                                    name="name" 
                                    id="Name" 
                                    value={userInfo.name} 
                                    onChange={handlechange} 
                                />
                                {nameError && <div className="validation">{nameError}</div>}
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                            <FormGroup>
                                <Label for="Address">{t('userprofile.address')}</Label>
                                <Input 
                                    type="text" 
                                    name="address" 
                                    id="Address" 
                                    value={userInfo.address}
                                    onChange={handlechange} 
                                />
                                {addressError && <div className="validation">{addressError}</div>}
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="Phone">{t('userprofile.phone')}</Label>
                                <Input 
                                    type="text" 
                                    name="phone" 
                                    id="Phone" 
                                    value={userInfo.phone} 
                                    onChange={handlechange} 
                                />
                                {phoneError && <div className="validation">{phoneError}</div>}
                            </FormGroup>
                            </Col>
                        </Row>
                        <Button type="submit">{t('userprofile.save')}</Button>
                    </Form>
                </div>
            </div>
        </MainLayout>
    );
};

export default UserProfile;
