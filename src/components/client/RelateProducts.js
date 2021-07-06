import React from 'react';
import Product from './Product';

const RelateProducts = () => {
    return (
        <div className="relate-products">
            <div className="relate-products-wrap px-3">
                <div className="row">
                    <Product type="related" />
                    <Product type="related" />
                    <Product type="related" />
                    <Product type="related" />
                </div>
            </div>
        </div>
    );
};

export default RelateProducts;
