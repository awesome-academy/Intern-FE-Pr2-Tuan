import { combineReducers } from 'redux';
import isShowCartDetail from './isShowCartDetail';
import openForm from './openForm';
import products from './products';
import categories from './categories';

const rootReducer = combineReducers({
    isShowCartDetail,
    openForm,
    products,
    categories,
});

export default rootReducer;
