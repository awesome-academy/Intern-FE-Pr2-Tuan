import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-admin">
            <div className="header-admin__logo">
                <Link to="/">
                    <img src="https://res.cloudinary.com/dofqucuyy/image/upload/v1585755124/Books/logo_gtuxyy.svg" alt="" />
                </Link>
            </div>
            <div className="header-admin__btn">
                Add Products
            </div>
        </div>
    );
};

export default Header;
