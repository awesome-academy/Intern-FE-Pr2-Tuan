import * as Types from '../constants/ActionTypes';

const initialState = [];

const products = (state = initialState, actions) => {
    switch (actions.type) {
        case Types.GET_ALL_PRODUCTS_SUCCESS:
            state = actions.products;
            return [...state];
        case Types.SEARCH_PRODUCT_SUCESS:
            state = actions.products;
            return [...state];
        case Types.FILTER_PRODUCTS_SUCCESS:
            state = actions.products;
            return [...state];
        default:
            return [...state];
    }
};

export default products;
