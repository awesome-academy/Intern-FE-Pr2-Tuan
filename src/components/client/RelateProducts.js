import React, { useEffect, useState } from 'react';
import callApi from '../../utils/apiCaller';
import Product from './Product';
import Paginationn from './Pagination';

const RelateProducts = ({ category }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [page, setPage] = useState(1);
    const numberButton = 5;
    const perPage = 8;

    const numberPage = Math.ceil(relatedProducts.length / perPage);
    const indexOfFirstProduct = (page - 1) * perPage;
    const indexOfLastProduct = indexOfFirstProduct + perPage;
    const productsSliced = relatedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const getPage = (page) => {
        setPage(page);
    };

    useEffect(() => {
        const getRelatedProducts = async (category) => {
            const res = await callApi(`api/product?category=${category}`);
            setRelatedProducts(res.data);
        };
        getRelatedProducts(category);
    }, [category]);

    const showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product) => {
                return <Product key={product._id} product={product} type="related" />;
            });
        }
        return result;
    };

    return (
        <div className="relate-products">
            <div className="relate-products-wrap px-3">
                <h3 className="title">
                    Related Items
                </h3>
                <div className="row mb-5">
                    {showProducts(productsSliced)}
                </div>
                <Paginationn 
                    numberButton={numberButton} 
                    numberPage={numberPage} 
                    getPage={getPage} 
                    page={page} 
                />
            </div>
        </div>
    );
};

export default RelateProducts;
