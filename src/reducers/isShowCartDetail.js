import * as Types from '../constants/ActionTypes';

const initialState = false;

const isShowCartDetail = (state = initialState, actions) => {
    switch (actions.type) {
        case Types.TOGLLE__CART__DETAIL:
            state = !state;
            return state;
        default:
            return state;
    }
};

export default isShowCartDetail;
