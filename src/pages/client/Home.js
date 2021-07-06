import React from 'react';
import Banner from '../../components/client/Banner';
import Cart from '../../components/client/Cart';
import Main from '../../components/client/Main';
import MainLayout from '../../components/MainLayout/MainLayout';

const Home = () => {
    return (
        <MainLayout classname="home-page">
            <Banner />
            <Cart />
            <Main />
        </MainLayout>
    );
};

export default Home;
