import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { url } from '../../constants/config';

const SiderBar = () => {
    const { t } = useTranslation();

    return (
        <div className="side-bar">
            <div className="side-bar-user d-none d-xl-block">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to={url.orders}>
                            {t('checkoutpage.yourorder')}
                        </Link>
                    </li>
                    <li className="nav-item mb-5">
                        <Link to={url.checkout}>
                        {t('checkoutpage.checkout')}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={url.profile}>
                        {t('checkoutpage.youraccount')}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={url.home}>
                        {t('checkoutpage.logout')}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SiderBar;
