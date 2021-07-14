import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import BtnAddToCart from './BtnAddToCart';

const ProductInfo = (props) => {
    const { productDetail } = props;
    const [isShowMore, setIsShowMore] = useState(false);
    const { t } = useTranslation();

    const toggleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return (
        <div className="product-info py-5">
            <Container fluid="lg">
                <Row>
                    <Col xl="6" lg="6" className="mb-5 text-center d-flex product-info__left">
                        <Link to="/" style={{ textDecoration: 'none', color: 'rgb(0, 158, 127)' }}>
                            <button className="btn back-btn px-2">
                                <FontAwesomeIcon icon={faArrowLeft} className="mx-2" />
                                {t('detail.back')}
                            </button>
                        </Link>
                        <div className="img-wrapper">
                            <img 
                                src={productDetail.img} 
                                alt="book img" 
                                className="w-100 h-100"
                            />
                        </div>
                    </Col>
                    <Col xl="6" lg="6" className="product-info__right">
                        <div className="product-info__right__title">
                            <h1>{productDetail.name}</h1>
                            <p>{productDetail.author}</p>
                        </div>
                        <div className="product-info__right__des">
                            <p className={isShowMore ? 'des-show' : ''}>
                                {productDetail.des}
                            </p>
                            {
                                isShowMore === false 
                                ? <div className="read-more" onClick={toggleShowMore}>{t('detail.readmore')}</div> 
                                : <div className="read-more" onClick={toggleShowMore}>{t('detail.less')}</div>
                            }
                        </div>
                        <div className="product-info__right__price">
                            ${productDetail.price}
                        </div>
                        <BtnAddToCart productDetail={productDetail || ''} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductInfo;
