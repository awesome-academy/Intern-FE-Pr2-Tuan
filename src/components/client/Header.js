import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'reactstrap';
import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import User from './User';
import { toggleModal, changeLanguage } from '../../actions';

const Header = () => {
    const openForm = useSelector((state) => state.openForm);
    const user = useSelector((state) => state.user);
    const isModal = useSelector((state) => state.isModal);
    const [isShowLang, setIsShowLang] = useState(false);
    const language = useSelector((state) => state.language);
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const toggleShowLang = () => {
        setIsShowLang(!isShowLang);
    };

    const toggle = () => {
        dispatch(toggleModal());
    };

    const handleChangeLang = (lang) => {
        dispatch(changeLanguage(lang));
        setIsShowLang(false);
        i18n.changeLanguage(lang);
    };

    const externalCloseBtn = <button 
                                className="auth close" 
                                style={{ 
                                position: 'absolute', 
                                top: '15px', 
                                right: '15px', 
                                backgroundColor: '#fff', 
                                width: '32px', 
                                height: '32px', 
                                color: 'rgb(34, 34, 34)', 
                                borderRadius: '50%', 
                                border: 'none',
                                opacity: '1', 
                            }} 
                                onClick={toggle}
    >
                                &times;
                             </button>;

    return (
        <header className="header d-flex justify-content-between align-items-center py-4">
            <div className="header__logo px-3">
                <Link to="/">
                    <img 
                        alt="logo" 
                        src="https://res.cloudinary.com/dofqucuyy/image/upload/v1585755124/Books/logo_gtuxyy.svg" 
                    />
                </Link>
            </div>
            <div className="header__btn px-3 d-flex align-items-center">
                <Modal 
                    isOpen={isModal} 
                    toggle={toggle} 
                    className="modal-dialog modal-dialog-centered" 
                    external={externalCloseBtn}
                >
                    {openForm === 'signin' ? <FormSignIn closeModal={toggle} /> : <FormSignUp />}
                </Modal>
                <div className="header__btn__lang">
                    <button className="language-switched h-100" onClick={toggleShowLang}>
                        {language}
                    </button>
                    <div className={isShowLang ? 'languages-wrap d-flex flex-column py-3 mt-3' : 'd-none'}>
                        <button className="language py-3 px-4" onClick={() => handleChangeLang('Vietnamese')}>Vietnamese</button>
                        <button className="language py-3 px-4" onClick={() => handleChangeLang('English')}>English</button>
                        <button className="language py-3 px-4" onClick={() => handleChangeLang('German')}>German</button>
                    </div>
                </div>
                {
                    user.accessToken
                    ? <User />
                    : <Button className="header__btn__signin" onClick={toggle}>{t('home.signin')}</Button>
                }
            </div>
        </header>
    );
};

export default Header;
