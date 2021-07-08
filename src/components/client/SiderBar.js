import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SiderBar = () => {
    const { t } = useTranslation();

    return (
        <div className="side-bar">
            <div className="side-bar-user d-none d-xl-block">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/order">
                            {t('checkoutpage.yourorder')}
                        </Link>
                    </li>
                    <li className="nav-item mb-5">
                        <Link to="/checkout">
                        {t('checkoutpage.checkout')}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile">
                        {t('checkoutpage.youraccount')}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">
                        {t('checkoutpage.logout')}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SiderBar;
