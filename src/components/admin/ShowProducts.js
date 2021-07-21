import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TaskBar from './TaskBar';
import Product from '../client/Product';
import Pagination from '../client/Pagination';

const ShowProducts = (props) => {
    const { 
        products, 
        numberButton, 
        numberPage, 
        getPage, 
        page, 
    } = props;

    const showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product) => {
                return <Product key={product._id} product={product} />;
            });
        }
        return result;
    };

    return (
        <div className="main-content">
            <Container>
                <Row className="px-3">
                    <Col className="taskbar-wrap mb-4 pb-0">
                        <TaskBar /> 
                    </Col>
                </Row>
                <Row>
                    {showProducts(products)}
                </Row>
                <Row className="justify-content-center mt-4">
                    <Pagination
                        numberButton={numberButton}
                        numberPage={numberPage}
                        getPage={getPage}
                        page={page}
                    />
                </Row>
            </Container>
        </div>
    );
};

export default ShowProducts;
