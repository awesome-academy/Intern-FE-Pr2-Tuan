import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const QuantityAdjusment = (props) => {
    const { type } = props;
    return (
        <div className={type === 'cart' ? 'quantityAdjustment cart-style' : 'quantityAdjustment'}>
            <div className="decrease adj">
                <FontAwesomeIcon icon={faMinus} />
            </div>
            <div className="number">1</div>
            <div className="increase adj">
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </div>
    );
};

export default QuantityAdjusment;
