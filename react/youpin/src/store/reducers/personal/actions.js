import * as actionTypes from './constants';
import api from '../../../api/index';


export const doLogin = (account, password) => 
{
  return async (dispatch) => {
    console.log(account,password, '+++++-----------------------');
    let data = await api.personal.loginPOST(account, password);
    console.log(data);
  }
}