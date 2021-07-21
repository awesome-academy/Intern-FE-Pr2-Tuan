import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Col } from 'reactstrap';
import { filterProductsAdmin } from '../../actions';

const Filter = (props) => {
    const { categories, filterValue, setFilterValue } = props;
    const listPrice = ['Price', 'Highest to Lowest', 'Lowest to Highest'];
    const dispatch = useDispatch();

    useEffect(() => {
        const { category, price } = filterValue;
        dispatch(filterProductsAdmin(category, price));
    }, [dispatch, filterValue]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilterValue({
            ...filterValue,
            [name]: value,
        });
    };

    const showOptionPrice = (list) => {
        const result = list.map((item, index) => {
            return (
                <option 
                    key={index} 
                    value={item === 'Price' ? '' : item}
                >
                    {item}
                </option>
            );
        });
        return result;
    };

    const showOptionCategory = (list) => {
        const result = list.map((item) => {
            return (
                <option 
                key={item._id} 
                value={item.name}
                >
                    {item.name}
                </option>
            );
        });
        return result;
    };

    return (
        <>
            <Col xl="3" className="filter mb-3 mb-xl-0">
                <select
                    name="category"
                    className="name"
                    value={filterValue.category}
                    onChange={handleChange}
                >
                    <option value="">Category Type</option>
                    {showOptionCategory(categories)}
                </select>
            </Col>
            <Col xl="3" className="filter mb-3 mb-xl-0">
                <select
                    name="price"
                    className="name"
                    value={filterValue.price}
                    onChange={handleChange}
                >
                    {showOptionPrice(listPrice)}
                </select>
            </Col>
        </>
    );
};

export default Filter;
