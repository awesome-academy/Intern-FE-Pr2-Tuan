import * as Types from '../constants/ActionTypes';

const inititalState = false;

const toggleFormAddProduct = (state = inititalState, actions) => {
    switch (actions.type) {
        case Types.TOGGLE_FORM_ADD_PRODUCT:
            state = !state;
            return state;
        default:
            return state;
    }
};

export default toggleFormAddProduct;
