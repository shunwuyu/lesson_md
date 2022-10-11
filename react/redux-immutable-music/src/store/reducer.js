import { combineReducers } from "redux-immutable";
import { reducer as userReducer } from "../application/User/Login/store/index";

export default combineReducers({
  user: userReducer
});