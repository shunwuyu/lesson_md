import { combineReducers } from 'redux';
import productsReducer from './products';
export default combineReducers ({
    // 之后开发具体功能模块的时候添加 reducer
    products: productsReducer,
});