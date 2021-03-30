import { fromJS } from "immutable";
import * as actionTypes from "./constants";

const defaultState = fromJS({
  userInfo: {},
  loginStatus: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USER_INFO:
      return state.set("userInfo", action.data);
    case actionTypes.CHANGE_LOGIN_STATUS:
      return state.set("loginStatus", action.data);
    default:
      return state;
  }
}
