import { combineReducers } from 'redux';
import isShowCartDetail from './isShowCartDetail';
import openForm from './openForm';
import products from './products';
import categories from './categories';
import productDetail from './productDetail';

const rootReducer = combineReducers({
    isShowCartDetail,
    openForm,
    products,
    categories,
    productDetail,
});

export default rootReducer;
