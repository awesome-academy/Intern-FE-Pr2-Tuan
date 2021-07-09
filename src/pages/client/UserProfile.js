import React from 'react';
import { useTranslation } from 'react-i18next';
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

const UserProfile = () => {
    const { t } = useTranslation();

    const onSubmit = (e) => {
        e.preventDefault();
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
                                <Input type="email" name="email" id="exampleEmail" />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">{t('userprofile.password')}</Label>
                                <Input type="password" name="password" id="examplePassword" />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                            <FormGroup>
                                <Label for="Address">{t('userprofile.address')}</Label>
                                <Input type="text" name="address" id="Address" />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="Phone">{t('userprofile.phone')}</Label>
                                <Input type="text" name="phone" id="Phone" />
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
