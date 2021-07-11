import React from 'react';
import Category from './Category';
import Products from './Products';

const Main = (props) => {
    const { products, categories } = props;
    return (
        <section className="main" style={{ backgroundColor: 'rgb(247,247,247)' }}>
            <div className="row">
                <Category categories={categories} />
                <Products products={products} />
            </div>
        </section>
    );
};

export default Main;
