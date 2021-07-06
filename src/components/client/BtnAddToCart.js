import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const BtnAddToCart = (props) => {
    const { type } = props;
    const { t } = useTranslation();

    return (
        <div className="btn-add">
            <button 
                className={
                    type === 'related' 
                    ? 'btn d-flex align-items-center related' 
                    : 'btn d-flex justify-content-center align-items-center'
                }
            >
                <FontAwesomeIcon icon={faShoppingBasket} />
                {
                    type === 'related' ? <p className="m-0">{t('btn.add')}</p> : <p className="m-0">{t('btn.addtocart')}</p>
                }
            </button>
        </div>
    );
};

export default BtnAddToCart;
