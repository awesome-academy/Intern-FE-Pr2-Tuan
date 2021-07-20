import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignOutAlt,
    faThLarge,
    faShoppingBasket,
    faCalendarCheck,
    faUsers,
    faDiceD6,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar-admin">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/admin">
                        <FontAwesomeIcon icon={faThLarge} />
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/products">
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/category">
                        <FontAwesomeIcon icon={faDiceD6} />
                        Category
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/orders">
                        <FontAwesomeIcon icon={faCalendarCheck} />
                        Orders
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/customers">
                        <FontAwesomeIcon icon={faUsers} />
                        Customers
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/login">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
