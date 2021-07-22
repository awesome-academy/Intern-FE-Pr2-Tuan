import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Col,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';
import { filterProductsAdmin, searchProduct } from '../../actions';

const Search = (props) => {
    const { filterValue } = props;
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    useEffect(() => {
        if (keyword) {
            dispatch(searchProduct(keyword));
        } else {
            dispatch(filterProductsAdmin(filterValue.category, filterValue.price));
        }
    }, [dispatch, filterValue.category, filterValue.price, keyword]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (keyword) {
            run();
        } else {
            dispatch(filterProductsAdmin(filterValue.category, filterValue.price));
        }
    };

    return (
        <Col xl="4" className="search m-0" onSubmit={handleSubmit}>
            <Form className="h-100">
                <FormGroup className="d-flex align-items-center">
                    <Input
                        name="keyword_product"
                        placeholder="Ex: Search By Name"
                        value={keyword}
                        onChange={handleChange}
                    />
                </FormGroup>
            </Form>
        </Col>
    );
};

export default Search;
