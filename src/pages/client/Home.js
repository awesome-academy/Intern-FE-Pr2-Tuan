import React, { useEffect } from 'react';
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
    const dispatch = useDispatch();
    const onToggleCartDetail = () => {
        dispatch(toggleCartDetail());
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
            <Main products={products} categories={categories} />
        </MainLayout>
    );
};

export default Home;
