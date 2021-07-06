import React from 'react';
import { Link } from 'react-router-dom';
import BtnAddToCart from './BtnAddToCart';

const Product = (props) => {
    const { type } = props;

    return (
        <div className="col-md-3 col-12 mb-4">
            <Link
                className="product d-flex flex-column justify-content-center align-items-center"
            >   
                <div className="product__img-wrap">
                    <img src="https://s3.amazonaws.com/redqteam.com/pickbazar/books/the_golden_tresure_thumb.png" alt="product" />
                </div>
                <div className="product__info text-center d-flex flex-column w-100">
                    <span className="product__info-title">The Princeton</span>
                    <span className="product__info-author">Princeton</span>
                </div>
                {
                    (type === 'related' || type === 'admin') 
                    &&  <div className="w-100 d-flex justify-content-between align-items-center mt-3">
                            <div className="price" style={{ color: '#009e7f', fontWeight: '600' }}>$99</div>
                            {
                                type !== 'admin' 
                                && <BtnAddToCart
                                    type={type}
                                />
                            }
                        </div>
                }
            </Link>
        </div>
    );
};

export default Product;
