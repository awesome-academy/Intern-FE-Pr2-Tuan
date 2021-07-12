import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    toggleCartDetail, 
    getAllProducts,
    getCategories, 
} from '../../actions/index';
import Banner from '../../components/client/Banner';
import Cart from '../../components/client/Cart';
import CartDetail from '../../components/client/CartDetail';
import Main from '../../components/client/Main';
import MainLayout from '../../components/MainLayout/MainLayout';

const Home = () => {
    const isShowCartDetail = useSelector((state) => state.isShowCartDetail);
    const products = useSelector((state) => state.products);
    const categories = useSelector((state) => state.categories);
    const [page, setPage] = useState(1);
    const numberButton = 5;
    const perPage = 8; 
    const dispatch = useDispatch();

    const onToggleCartDetail = () => {
        dispatch(toggleCartDetail());
    };

    const numberPage = Math.ceil(products.length / perPage);
    const indexOfFirstProduct = (page - 1) * perPage;
    const indexOfLastProduct = indexOfFirstProduct + perPage;
    const productsSliced = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const getPage = (page) => {
        setPage(page);
    };

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <MainLayout classname="home-page">
            <Banner />
            <Cart toggleCartDetail={onToggleCartDetail} />
            <CartDetail 
                isShowCartDetail={isShowCartDetail} 
                toggleCartDetail={onToggleCartDetail} 
            />
            <Main 
                products={productsSliced} 
                categories={categories}
                numberButton={numberButton}
                numberPage={numberPage}
                getPage={getPage} 
                page={page}
            />
        </MainLayout>
    );
};

export default Home;
