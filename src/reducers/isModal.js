import * as Types from '../constants/ActionTypes';

const initialState = false;

const isModal = (state = initialState, actions) => {
    switch (actions.type) {
        case Types.TOGGLE_MODAL:
            state = !state;
            return state;
        default:
            return state;
    }
};

export default isModal;
