import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';
import { endpoint } from '../constants/endpoint';

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
        const res = await callApi(endpoint.product, 'GET', null);
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
        const res = await callApi(`${endpoint.product}?name=${keyword}`);
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
        const res = await callApi(endpoint.category, 'GET', null);
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
        const res = await callApi(`${endpoint.product}?category=${category}`, 'GET', null);
        dispatch(filterProductsSuccess(res.data));
    };
};

export const getOneProductSuccess = (product) => {
    return {
        type: Types.GET_ONE_PRODUCT_SUCCESS,
        product,
    };
};

export const getOneProductFile = (message) => {
    return {
        type: Types.GET_ONE_PRODUCT_FAILE,
        message,
    };
};

export const getOneProduct = (id) => {
    return async (dispatch) => {
        try {
            const res = await callApi(`${endpoint.product}/${id}`, 'GET', null);
            dispatch(getOneProductSuccess(res.data));
        } catch (error) {
            dispatch(getOneProductFile(error.message));
        }
    };
};

export const addToCart = (product) => {
    return {
        type: Types.ADD_TO_CART,
        product,
    };
};

export const decreaseCartItem = (product) => {
    return {
        type: Types.DECREASE_CARTITEM,
        product,
    };
};

export const removeCartItem = (product) => {
    return {
        type: Types.REMOVE_CARTITEM,
        product,
    };
};

export const login = (user) => {
    return {
        type: Types.LOGIN,
        user,
    };
};

export const logout = () => {
    return {
        type: Types.LOGOUT,
    };
};

export const updateUserSuccess = (user) => {
    return {
        type: Types.UPDATE_PROFILE_USER,
        user,
    };
};

export const updateUser = (newUserInfo) => {
    return async (dispatch) => {
        const res = await callApi(endpoint.updateUser, 'PUT', newUserInfo);
        const oldUser = JSON.parse(localStorage.getItem('user'));
        const userUpdated = res.data;
        userUpdated.accessToken = oldUser.accessToken;
        dispatch(updateUserSuccess(userUpdated));
    };
};

export const toggleModal = () => {
    return {
        type: Types.TOGGLE_MODAL,
    };
};

export const removeCart = () => {
    return {
        type: Types.REMOVE_CART,
    };
};

export const toggleFormAddProduct = () => {
    return {
        type: Types.TOGGLE_FORM_ADD_PRODUCT,
    };
};

export const addProductSuccess = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product,
    };
};

export const addProduct = (product) => {
    return async (dispatch) => {
        const res = await callApi(endpoint.product, 'POST', product);
        dispatch(addProductSuccess(res.data));
    };
};

export const removeProductSuccess = (product) => {
    return {
        type: Types.REMOVE_PRODUCT,
        product,
    };
};

export const removeProduct = (id) => {
    return async (dispatch) => {
        const res = await callApi(`${endpoint.product}/${id}`, 'DELETE', null);
        dispatch(removeProductSuccess(res.data));
    };
};

export const updateProductSuccess = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product,
    };
};

export const updateProduct = (product) => {
    return async (dispatch) => {
        const res = await callApi(endpoint.product, 'PUT', product);
        dispatch(updateProductSuccess(res.data));
    };
};

export const getProductUpdate = (product) => {
    return {
        type: Types.GET_PRODUCT_UPDATE,
        product,
    };
};

export const resetProductUpdate = () => {
    return {
        type: Types.RESET_PRODUCT_UPDATE,
    };
};
