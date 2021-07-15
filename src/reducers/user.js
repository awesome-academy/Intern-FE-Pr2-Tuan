import * as Types from '../constants/ActionTypes';

const userInfo = localStorage.getItem('user');

const initialState = userInfo ? JSON.parse(userInfo) : {};

const user = (state = initialState, actions) => {
    const { user } = actions;
    switch (actions.type) {
        case Types.LOGIN:
            state = user;
            localStorage.setItem('user', JSON.stringify(user));
            return { ...state };
        case Types.LOGOUT:
            state = {};
            localStorage.removeItem('user');
            return { ...state };
        case Types.UPDATE_PROFILE_USER:
            state = user;
            localStorage.setItem('user', JSON.stringify(user));
            return { ...state };
        default:
            return { ...state };
    }
};

export default user;
