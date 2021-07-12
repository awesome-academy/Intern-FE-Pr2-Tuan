import * as Types from '../constants/ActionTypes';

const initialState = {};

const productDetail = (state = initialState, actions) => {
    switch (actions.type) {
        case Types.GET_ONE_PRODUCT_SUCCESS:
            state = actions.product;
            return { ...state };
        case Types.GET_ONE_PRODUCT_FAILE:
            const message = actions.message;
            return message;
        default:
            return { ...state };
    }
};

export default productDetail;
