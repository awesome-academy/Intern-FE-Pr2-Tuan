import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../../actions';
import Burger from './Burger';
import { url } from '../../constants/config';

const User = () => {
    const [isClick, setIsClick] = useState(false);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const notify = () => toast.success('Logout Success');

    const handleClick = () => {
        dispatch(logout());
        notify();
    };

    return (
        <div className="user h-100">
            <div className={isClick ? 'welcome welcome-active' : 'welcome'} onClick={() => setIsClick(!isClick)}>
                Hello {user.name}
                <Burger isClick={isClick} />
            </div>
            <ul className={isClick ? 'nav nav-active' : 'nav'}>
                <li className={isClick ? 'nav-item active' : 'nav-item'}>
                    <Link to={url.profile}>Profile</Link>
                </li>
                <li className={isClick ? 'nav-item active' : 'nav-item'}>
                    <Link to={url.checkout}>Checkout</Link>
                </li>
                <li className={isClick ? 'nav-item active' : 'nav-item'}>
                    <Link to={url.orders}>My Orders</Link>
                </li>
                <li className={isClick ? 'nav-item active' : 'nav-item'}>
                    <Link to={url.home} onClick={handleClick}>Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default User;
