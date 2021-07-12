import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

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

export const getAllProductSuccess = (products) => {
    return {
        type: Types.GET_ALL_PRODUCTS_SUCCESS,
        products,
    };
};

export const getAllProducts = () => {
    return async (dispatch) => {
        const res = await callApi('api/product', 'GET', null);
        dispatch(getAllProductSuccess(res.data));
    };
};

export const searchProductSuccess = (products) => {
    return {
        type: Types.SEARCH_PRODUCT_SUCESS,
        products,
    };
};

export const searchProduct = (keyword) => {
    return async (dispatch) => {
        const res = await callApi(`api/product?name=${keyword}`);
        dispatch(searchProductSuccess(res.data));
    };
};

export const getCategoriesSuccess = (categories) => {
    return {
        type: Types.GET_CATEGORIES_SUCCESS,
        categories,
    };
};

export const getCategories = () => {
    return async (dispatch) => {
        const res = await callApi('api/category', 'GET', null);
        dispatch(getCategoriesSuccess(res.data));        
    };
};

export const filterProductsSuccess = (products) => {
    return {
        type: Types.FILTER_PRODUCTS_SUCCESS,
        products,
    };
};

export const filterProducts = (category) => {
    return async (dispatch) => {
        const res = await callApi(`api/product?category=${category}`, 'GET', null);
        dispatch(filterProductsSuccess(res.data));
    };
};
