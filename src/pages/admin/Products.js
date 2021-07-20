import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../actions';
import Header from '../../components/admin/Header';
import ShowProducts from '../../components/admin/ShowProducts';
import Sidebar from '../../components/admin/Sidebar';

const Products = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <div className="products-header">
            <Header />
            <Sidebar />
            <ShowProducts products={products} />
        </div>
    );
};

export default Products;
