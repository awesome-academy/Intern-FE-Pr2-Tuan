import * as Types from '../constants/ActionTypes';

const inititalState = 'English';

const language = (state = inititalState, actions) => {
    switch (actions.type) {
        case Types.CHANGE_LANGUAGE:
            state = actions.language;
            return state;
        default:
            return state;
    }
};

export default language;
