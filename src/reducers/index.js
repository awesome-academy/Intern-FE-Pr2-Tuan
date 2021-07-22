import { combineReducers } from 'redux';
import isShowCartDetail from './isShowCartDetail';
import openForm from './openForm';
import products from './products';
import categories from './categories';
import productDetail from './productDetail';
import cart from './cart';
import user from './user';
import isModal from './isModal';
import formAddProduct from './formAddProduct';
import productEditting from './productEditting';
import language from './language';

const rootReducer = combineReducers({
    isShowCartDetail,
    openForm,
    products,
    categories,
    productDetail,
    cart,
    user,
    isModal,
    formAddProduct,
    productEditting,
    language,
});

export default rootReducer;
