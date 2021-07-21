import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFormAddProduct } from '../../actions';

const Header = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleFormAddProduct());
    };
 
    return (
        <div className="header-admin">
            <div className="header-admin__logo">
                <Link to="/">
                    <img src="https://res.cloudinary.com/dofqucuyy/image/upload/v1585755124/Books/logo_gtuxyy.svg" alt="" />
                </Link>
            </div>
            <div className="header-admin__btn" onClick={handleClick}>
                Add Products
            </div>
        </div>
    );
};

export default Header;
