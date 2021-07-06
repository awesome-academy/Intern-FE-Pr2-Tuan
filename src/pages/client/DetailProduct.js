import React from 'react';
import Cart from '../../components/client/Cart';
import ProdductInfo from '../../components/client/ProdductInfo';
import RelateProducts from '../../components/client/RelateProducts';
import MainLayout from '../../components/MainLayout/MainLayout';

const DetailProduct = () => {
    return (
        <MainLayout classname="detail-page">
            <Cart />
            <ProdductInfo />
            <RelateProducts />
        </MainLayout>
    );
};

export default DetailProduct;
