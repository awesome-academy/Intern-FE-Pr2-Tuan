import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartDetail } from '../../actions/index';
import Banner from '../../components/client/Banner';
import Cart from '../../components/client/Cart';
import CartDetail from '../../components/client/CartDetail';
import Main from '../../components/client/Main';
import MainLayout from '../../components/MainLayout/MainLayout';

const Home = () => {
    const isShowCartDetail = useSelector((state) => state.isShowCartDetail);
    const dispatch = useDispatch();
    const onToggleCartDetail = () => {
        dispatch(toggleCartDetail());
    };

    return (
        <MainLayout classname="home-page">
            <Banner />
            <Cart toggleCartDetail={onToggleCartDetail} />
            <CartDetail 
                isShowCartDetail={isShowCartDetail} 
                toggleCartDetail={onToggleCartDetail} 
            />
            <Main />
        </MainLayout>
    );
};

export default Home;
