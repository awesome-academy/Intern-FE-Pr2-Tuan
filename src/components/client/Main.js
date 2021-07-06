import React from 'react';
import Category from './Category';
import Products from './Products';

const Main = () => {
    return (
        <section className="main" style={{ backgroundColor: 'rgb(247,247,247)' }}>
            <div className="row">
                <Category />
                <Products />
            </div>
        </section>
    );
};

export default Main;
