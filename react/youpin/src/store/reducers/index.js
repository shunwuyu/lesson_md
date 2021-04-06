import {
	combineReducers
} from 'redux';
import personalReducer from './personal/personalReducer';
import productReducer from './product/productReducer';


const reducer = combineReducers({
  product: productReducer,
  personal: personalReducer
});
export default reducer;