import {
  loginByPhoneRequest
} from "../../../../api/request";


import {
  CHANGE_USER_INFO,
  CHANGE_LOGIN_STATUS
} from './constants'

export const saveUserInfo = data => ({
  type: CHANGE_USER_INFO,
  data
});

export const saveLoginStatus = data => ({
  type: CHANGE_LOGIN_STATUS,
  data
});

export const loginByPhone = (phone, password) => {
  return dispatch => {
    loginByPhoneRequest(phone, password)
      .then(res => {
        dispatch(saveUserInfo(res));
        dispatch(saveLoginStatus(true));
      })
      .catch(() => {
        console.log("登录失败！");
      });
  };
};