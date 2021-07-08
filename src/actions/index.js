import * as Types from '../constants/ActionTypes';

export const toggleCartDetail = () => {
    return {
        type: Types.TOGLLE__CART__DETAIL,
    };
};

export const OpenFormSignIn = () => {
    return {
        type: Types.OPEN_FORM_SIGNIN,
    };
};

export const OpenFormSignUp = () => {
    return {
        type: Types.OPEN_FORM_SIGNUP,
    };
};
