import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../../actions';
import { url } from '../../constants/config';

const SiderBar = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const notify = () => toast.success('Logout Success');

    const handleClick = () => {
        dispatch(logout());
        notify();
    };

    return (
        <div className="side-bar">
            <div className="side-bar-user d-none d-xl-block">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to={url.orders} className={match.path === url.orders ? 'active' : ''}>
                            {t('checkoutpage.yourorder')}
                        </Link>
                    </li>
                    <li className="nav-item mb-5">
                        <Link to={url.checkout} className={match.path === url.checkout ? 'active' : ''}>
                        {t('checkoutpage.checkout')}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={url.profile} className={match.path === url.profile ? 'active' : ''}>
                        {t('checkoutpage.youraccount')}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={url.home} className={match.path === url.home ? 'active' : ''} onClick={handleClick}>
                        {t('checkoutpage.logout')}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SiderBar;
