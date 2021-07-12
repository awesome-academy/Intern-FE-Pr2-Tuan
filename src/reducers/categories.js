import * as Types from '../constants/ActionTypes';

const initialState = [];

const categories = (state = initialState, actions) => {
    switch (actions.type) {
        case Types.GET_CATEGORIES_SUCCESS:
            state = actions.categories;
            return [...state];
        default:
            return [...state];
    }
};

export default categories;
