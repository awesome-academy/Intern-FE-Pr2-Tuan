import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getCategories } from '../../actions';
import Header from '../../components/admin/Header';
import ShowProducts from '../../components/admin/ShowProducts';
import Sidebar from '../../components/admin/Sidebar';
import ProductFunc from '../../components/admin/ProductFunc';

const Products = () => {
    const products = useSelector((state) => state.products);
    const categories = useSelector((state) => state.categories);
    const formAddProduct = useSelector((state) => state.formAddProduct);
    const [page, setPage] = useState(1);
    const numberButton = 5;
    const perPage = 8;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getCategories());
    }, [dispatch]);

    const getPage = (page) => {
        setPage(page);
    };

    const numberPage = Math.ceil(products.length / perPage);
    const indexOfFirstProduct = (page - 1) * perPage;
    const indexOfLastProduct = indexOfFirstProduct + perPage;
    const productsSliced = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="products-admin">
            <Header />
            <Sidebar />
            {formAddProduct && <ProductFunc categories={categories} />}
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
