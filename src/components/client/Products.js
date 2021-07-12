import React from 'react';
import Product from './Product';
import Paginationn from './Pagination';

const Products = (props) => {
    const { 
        products,
        numberPage,
        numberButton,
        getPage,
        page,
    } = props;

    const showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product) => {
                return <Product key={product._id} product={product} />;
            });
        }
        return result;
    };

    return (
        <div className="col-md-10">
            <div className="row products-wrap mb-5">
                {showProducts(products)}
            </div>
            <Paginationn 
                numberPage={numberPage}
                numberButton={numberButton}
                getPage={getPage}
                page={page}
            />
        </div>
        
    );
};

export default Products;
