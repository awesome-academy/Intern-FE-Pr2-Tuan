import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cart from '../../components/client/Cart';
import ProductInfo from '../../components/client/ProdductInfo';
import RelateProducts from '../../components/client/RelateProducts';
import MainLayout from '../../components/MainLayout/MainLayout';
import { getOneProduct } from '../../actions';

const DetailProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.productDetail);
    const { category } = productDetail;
    
    useEffect(() => {
        dispatch(getOneProduct(id));
    }, [dispatch, id]);

    return (
        <MainLayout classname="detail-page">
            <Cart />
            <ProductInfo productDetail={productDetail} />
            <RelateProducts category={category} />
        </MainLayout>
    );
};

export default DetailProduct;
