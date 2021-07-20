import React from 'react';
import { 
    Col, 
    Form, 
    FormGroup, 
    Input, 
} from 'reactstrap';

const Search = () => {
    return (
        <Col xl="4" className="search m-0">
            <Form className="h-100">
                <FormGroup className="d-flex align-items-center">
                    <Input
                        name="keyword_product"
                        placeholder="Ex: Search By Name"
                    />
                </FormGroup>
            </Form>
        </Col>
    );
};

export default Search;
