import React from 'react';
import Category from './Category';
import Products from './Products';

const Main = (props) => {
    const { 
        products, 
        categories,
        numberPage,
        numberButton,
        getPage, 
        page,
    } = props;

    return (
        <section className="main" style={{ backgroundColor: 'rgb(247,247,247)' }}>
            <div className="row">
                <Category categories={categories} getPage={getPage} />
                <Products 
                products={products}
                numberPage={numberPage}
                numberButton={numberButton}
                getPage={getPage} 
                page={page}
                />
            </div>
        </section>
    );
};

export default Main;
