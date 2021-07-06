import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import BtnAddToCart from './BtnAddToCart';

const ProdductInfo = () => {
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
                                src="https://s3.amazonaws.com/redqteam.com/pickbazar/books/music_school.png" 
                                alt="book img" 
                                className="w-100 h-100"
                            />
                        </div>
                    </Col>
                    <Col xl="6" lg="6" className="product-info__right">
                        <div className="product-info__right__title">
                            <h1>Illustrated Stories for Children</h1>
                            <p>Usborne</p>
                        </div>
                        <div className="product-info__right__des">
                            <p className={isShowMore === true ? 'des-show' : ''}>
                                The European languages are members of the same family.
                                Their separate existence is a myth. For science, music, sport, etc, 
                                Europe uses the same vocabulary. 
                                The languages only differ in their grammar, their pronunciation 
                                and their most common words. 
                                Everyone realizes why a new common language would be desirable: 
                                one could refuse to pay expensive translators. 
                                To achieve this, it would be necessary to have uniform grammar, 
                                pronunciation and more common words. 
                                If several languages coalesce, 
                                the grammar of the resulting language is
                                more simple and regular than that of the individual languages.
                            </p>
                            {
                                isShowMore === false 
                                ? <div className="read-more" onClick={toggleShowMore}>{t('detail.readmore')}</div> 
                                : <div className="read-more" onClick={toggleShowMore}>{t('detail.less')}</div>
                            }
                        </div>
                        <div className="product-info__right__price">
                            $99
                        </div>
                        <BtnAddToCart />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProdductInfo;
