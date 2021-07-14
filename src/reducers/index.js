import { combineReducers } from 'redux';
import isShowCartDetail from './isShowCartDetail';
import openForm from './openForm';
import products from './products';
import categories from './categories';
import productDetail from './productDetail';
import cart from './cart';
import user from './user';

const rootReducer = combineReducers({
    isShowCartDetail,
    openForm,
    products,
    categories,
    productDetail,
    cart,
    user,
});

export default rootReducer;
