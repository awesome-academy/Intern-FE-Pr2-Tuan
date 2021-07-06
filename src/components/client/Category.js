import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Category = () => {
    const { t } = useTranslation();
    return (
        <div className="col-md-2">
            <div className="category d-flex flex-column h-100">
                <div className="logo d-flex align-items-center">
                    <FontAwesomeIcon icon={faThLarge} className="mr-2" />
                    <span className="flex-grow-1" style={{ marginLeft: '5px' }}>{t('home.category')}</span>
                </div>
                <ul className="nav flex-column flex-nowrap">
                    <li className="nav-item">
                        <p>Children Literature</p>
                    </li>
                    <li className="nav-item">
                        <p>Comic Book</p>
                    </li>
                    <li className="nav-item">
                        <p>Fantasy</p>
                    </li>
                    <li className="nav-item">
                        <p>Horror</p>
                    </li>
                    <li className="nav-item">
                        <p>Novel</p>
                    </li>
                    <li className="nav-item">
                        <p>Romantic</p>
                    </li>
                    <li className="nav-item">
                        <p>Science Fiction</p>
                    </li>
                    <li className="nav-item">
                        <p>Thriller</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Category;
