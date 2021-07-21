import * as Types from '../constants/ActionTypes';

const initialState = [];

const findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
        if (product._id === id) {
            result = index;
        }
    });
    return result;
};

const products = (state = initialState, actions) => {
    let index = -1;
    switch (actions.type) {
        case Types.GET_ALL_PRODUCTS_SUCCESS:
            state = actions.products;
            return state;
        case Types.SEARCH_PRODUCT_SUCESS:
            state = actions.products;
            return [...state];
        case Types.FILTER_PRODUCTS_SUCCESS:
            state = actions.products;
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(actions.product);
            return [...state];
        case Types.REMOVE_PRODUCT:
            index = findIndex(state, actions.product._id);
            state.splice(index, 1);
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, actions.product._id);
            state[index] = actions.product;
            return [...state];
        case Types.FILTER_PRODUCTS_ADMIN:
            state = actions.products;
            return [...state];
        default:
            return [...state];
    }
};

export default products;
