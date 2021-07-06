import React from 'react';
import Header from '../client/Header';

const MainLayout = (props) => {
    const { classname } = props;
    
    return (
        <div className={classname}>
            <Header />
            { props.children }
        </div>
    );
};

export default MainLayout;
