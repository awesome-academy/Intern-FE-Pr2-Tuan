import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../../actions';

const Category = (props) => {
    const [categoryActive, setCategoryActive] = useState('');
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { categories } = props;

    const handleClick = (category) => {
        dispatch(filterProducts(category));
        setCategoryActive(category);
    };

    const showCategories = (categories) => {
        let result = null;
        if (categories.length > 0) {
            result = categories.map((category) => {
                return (
                    <li 
                    key={category._id} 
                    className={
                        categoryActive === category.name 
                        ? 'nav-item active' 
                        : 'nav-item'
                        }
                    >
                        <p onClick={() => handleClick(category.name)}>{category.name}</p>
                    </li>
                );
            });
        }
        return result;
    };

    return (
        <div className="col-md-2">
            <div className="category d-flex flex-column h-100">
                <div className="logo d-flex align-items-center">
                    <FontAwesomeIcon icon={faThLarge} className="mr-2" />
                    <span className="flex-grow-1" style={{ marginLeft: '5px' }}>{t('home.category')}</span>
                </div>
                <ul className="nav flex-column flex-nowrap">
                    {showCategories(categories)}
                </ul>
            </div>
        </div>
    );
};

export default Category;
