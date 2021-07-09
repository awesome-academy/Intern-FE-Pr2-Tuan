import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';

const User = () => {
    const [isClick, setIsClick] = useState(false);

    return (
        <div className="user h-100">
            <div className={isClick ? 'welcome welcome-active' : 'welcome'} onClick={() => setIsClick(!isClick)}>
                Hello Tuan
                <Burger isClick={isClick} />
            </div>
            <ul className={isClick ? 'nav nav-active' : 'nav'}>
                <li className={isClick ? 'nav-item active' : 'nav-item'}>
                    <Link to="/profile">Profile</Link>
                </li>
                <li className={isClick ? 'nav-item active' : 'nav-item'}>
                    <Link to="/checkout">Checkout</Link>
                </li>
                <li className={isClick ? 'nav-item active' : 'nav-item'}>
                    <Link to="/orders">My Orders</Link>
                </li>
                <li className={isClick ? 'nav-item active' : 'nav-item'}>
                    <Link to="#">Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default User;
