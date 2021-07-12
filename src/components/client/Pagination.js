import React from 'react';
import { Pagination, PaginationItem } from 'reactstrap';

const Paginationn = (props) => {
    const { 
        numberPage, 
        numberButton, 
        getPage,
        page, 
    } = props;

    let buttonStart = page - Math.floor(numberButton / 2);
    let buttonEnd = page + Math.floor(numberButton / 2);

    if (buttonStart < 1) {
        buttonStart = 1;
        buttonEnd = numberButton;
    }

    if (buttonEnd > numberPage) {
        buttonEnd = numberPage;
        buttonStart = numberPage - (numberButton - 1);
        if (buttonStart < 1) {
            buttonStart = 1;
        }
    }

    const handleClick = (page) => {
        getPage(page);
    };

    const handleClickPrevious = (page) => {
        let currentPage = page - 1;
        if (currentPage < 1) {
            currentPage = 1;
        }
        getPage(currentPage);
    };

    const handleClickNext = (page) => {
        let currentPage = page + 1; 
        if (currentPage > numberPage) {
            currentPage = numberPage;
        }
        getPage(currentPage);
    };

    const showButton = (buttonStart, buttonEnd) => {
        const result = [];
        for (let i = buttonStart; i <= buttonEnd; i++) {
            result.push(
                <PaginationItem 
                    className={page === i ? 'px-3 py-2 active' : 'px-3 py-2'} 
                    onClick={() => handleClick(i)}
                >
                    {i}
                </PaginationItem>,
            );
        }
        return result;
    };

    return (
        <div className="row">
            <Pagination aria-label="Page navigation example">
                <PaginationItem className="px-2 py-2" onClick={() => handleClickPrevious(page)}>
                    Previous
                </PaginationItem>
                {showButton(buttonStart, buttonEnd)}
                <PaginationItem className="px-2 py-2" onClick={() => handleClickNext(page)}>
                    Next
                </PaginationItem>
            </Pagination>
        </div>
    );
};

export default Paginationn;
