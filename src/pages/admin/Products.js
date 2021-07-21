import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../actions';
import Header from '../../components/admin/Header';
import ShowProducts from '../../components/admin/ShowProducts';
import Sidebar from '../../components/admin/Sidebar';

const Products = () => {
    const products = useSelector((state) => state.products);
    const [page, setPage] = useState(1);
    const numberButton = 5;
    const perPage = 8;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    const getPage = (page) => {
        setPage(page);
    };

    const numberPage = Math.ceil(products.length / perPage);
    const indexOfFirstProduct = (page - 1) * perPage;
    const indexOfLastProduct = indexOfFirstProduct + perPage;
    const productsSliced = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="products-header">
            <Header />
            <Sidebar />
            <ShowProducts 
                products={productsSliced}
                numberButton={numberButton}
                numberPage={numberPage}
                getPage={getPage} 
                page={page} 
            />
        </div>
    );
};

export default Products;
