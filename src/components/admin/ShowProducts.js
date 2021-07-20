import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TaskBar from './TaskBar';
import Product from '../client/Product';

const ShowProducts = (props) => {
    const { products } = props;

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
                {/* <Row style={{ justifyContent: "center" }}>
                    <Pagination 
                        perPage={perPage} 
                        totalProducts={totalProducts} 
                        paginate={paginate} 
                    />
                </Row> */}
            </Container>
        </div>
    );
};

export default ShowProducts;
