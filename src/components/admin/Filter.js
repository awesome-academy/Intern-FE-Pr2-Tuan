import React from 'react';
import { Col } from 'reactstrap';

const Filter = () => {
    const listPrice = ['Price', 'Highest to Lowest', 'Lowest to Highest'];

    const showOptionPrice = (list) => {
        let result = null;
        result = list.map((item, index) => <option key={index} value={item}>{item}</option>);
        return result;
    };

    return (
        <>
            <Col xl="3" className="filter mb-3 mb-xl-0">
                <select
                    name="category"
                    className="name"
                >
                    <option value="Category Type">Category Type</option>
                </select>
            </Col>
            <Col xl="3" className="filter mb-3 mb-xl-0">
                <select
                    name="price"
                    className="name"
                >
                    {showOptionPrice(listPrice)}
                </select>
            </Col>
        </>
    );
};

export default Filter;
