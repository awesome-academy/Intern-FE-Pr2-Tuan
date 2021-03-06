import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductUpdate, toggleFormAddProduct } from '../../actions';
import BtnDelete from '../admin/BtnDelete';
import BtnAddToCart from './BtnAddToCart';

const Product = (props) => {
    const { type, product } = props;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getProductUpdate(product));
        dispatch(toggleFormAddProduct());
    };

    return (
        <div className="col-md-3 col-12 mb-4">
            <Link
                className="product d-flex flex-column justify-content-center align-items-center"
                // to={`/product/${product._id}`}
                to={type === 'admin' ? '/admin/product' : `/product/${product._id}`}
            >   
                <div className="product__img-wrap" onClick={type === 'admin' ? handleClick : null}>
                    <img src={product.img} alt="product" />
                </div>
                <div className="product__info text-center d-flex flex-column w-100">
                    <span className="product__info-title">{product.name}</span>
                    <span className="product__info-author">{product.author}</span>
                </div>
                {
                    (type === 'related' || type === 'admin') 
                    &&  <div className="w-100 d-flex justify-content-between align-items-center mt-3">
                            <div className="price" style={{ color: '#009e7f', fontWeight: '600' }}>${product.price}</div>
                            {
                                type !== 'admin' 
                                && <BtnAddToCart
                                    type={type}
                                    productDetail={product}
                                />
                            }
                            {
                                type === 'admin'
                                && <BtnDelete product={product} />
                            }
                        </div>
                }
            </Link>
        </div>
    );
};

export default Product;
