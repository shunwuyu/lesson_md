import axios from 'axios'

export const register = (params) => {
  // console.log(params, '++++++++');
  return axios.post(`/api/users/register`, params);
}

export const userLogin = (params) => {
  return axios.post(`/api/users/login`, params);
}

export const userInfo = (params) => {
  return axios.post(`/api/users/userInfo`, params)
}