import React from 'react';
import { Col, Row } from 'reactstrap';
import Search from './Search';
import Filter from './Filter';

const TaskBar = () => {
    return (
        <Row className="taskbar d-flex w-100">
            <Col xl="2" className="mb-4 mb-xl-0">
                <h3 className="title">Products</h3>
            </Col>
            <Filter />
            <Search />
        </Row>
    );
};

export default TaskBar;
