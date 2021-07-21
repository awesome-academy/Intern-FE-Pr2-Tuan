import * as Types from '../constants/ActionTypes';

const initialstate = {};

const productEditting = (state = initialstate, actions) => {
    switch (actions.type) {
        case Types.GET_PRODUCT_UPDATE:
            state = actions.product;
            return { ...state };
        case Types.RESET_PRODUCT_UPDATE:
            state = {};
            return { ...state };
        default:
            return { ...state };
    }
};

export default productEditting;
