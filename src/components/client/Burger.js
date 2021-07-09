import React from 'react';

const Burger = (props) => {
    const { isClick } = props; 
    return (
        <div className={isClick ? 'burger toggle' : 'burger'}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    );
};

export default Burger;
