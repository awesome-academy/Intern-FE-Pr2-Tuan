import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import { logout } from '../../actions';

const User = () => {
    const [isClick, setIsClick] = useState(false);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <div className="user h-100">
            <div className={isClick ? 'welcome welcome-active' : 'welcome'} onClick={() => setIsClick(!isClick)}>
                Hello {user.name}
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
                    <Link to="#" onClick={() => dispatch(logout())}>Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default User;
