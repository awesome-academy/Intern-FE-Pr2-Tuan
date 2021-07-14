import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cart from '../../components/client/Cart';
import ProductInfo from '../../components/client/ProdductInfo';
import RelateProducts from '../../components/client/RelateProducts';
import MainLayout from '../../components/MainLayout/MainLayout';
import CartDetail from '../../components/client/CartDetail';
import { getOneProduct, toggleCartDetail } from '../../actions';

const DetailProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.productDetail);
    const isShowCartDetail = useSelector((state) => state.isShowCartDetail);
    const { category } = productDetail;
    
    useEffect(() => {
        dispatch(getOneProduct(id));
        window.scrollTo(0, 0);
    }, [dispatch, id]);

    const onToggleCartDetail = () => {
        dispatch(toggleCartDetail());
    };

    return (
        <MainLayout classname="detail-page">
            <Cart toggleCartDetail={onToggleCartDetail} />
            <CartDetail 
                isShowCartDetail={isShowCartDetail} 
                toggleCartDetail={onToggleCartDetail} 
            />
            <ProductInfo productDetail={productDetail} />
            <RelateProducts category={category} />
        </MainLayout>
    );
};

export default DetailProduct;
