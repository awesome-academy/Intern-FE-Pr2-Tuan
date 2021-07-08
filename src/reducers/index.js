import { combineReducers } from 'redux';
import isShowCartDetail from './isShowCartDetail';
import openForm from './openForm';

const rootReducer = combineReducers({
    isShowCartDetail,
    openForm,
});

export default rootReducer;
