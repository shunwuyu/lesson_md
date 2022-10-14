import * as actionTypes from './constants';
//把登录态和基本信息存储到redux中
const initial = {
	isLogin: false,
	baseInfo: null
};

export default function personalReducer(state = initial, action) {
  switch (action.type) {
    case actionTypes.PERSONAL_LOGIN_SUCCESS:
      state = {
        ...state,
        isLogin:true,
        baseInfo: action.payload
      }
      break;
    default:
      return state;
  }
}