import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Product from './Product';

const Products = () => {
    return (
        <div className="col-md-10">
            <div className="row products-wrap mb-5">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <div className="row">
                <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled>
                        <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem disabled>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem active>
                        <PaginationLink href="#">
                        1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        5
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last href="#" />
                    </PaginationItem>
                </Pagination>
            </div>
        </div>
        
    );
};

export default Products;
