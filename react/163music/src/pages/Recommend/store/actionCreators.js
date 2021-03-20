import * as actionTypes from './constants';

import { getBannerRequest } from '../../../api/request';

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: data
});

export const getBannerList = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/banner')
      .then(data => data.json())
      .then(data => {
        dispatch (changeBannerList (data.banners));
      })
    // getBannerRequest().then (data => {
    //   console.log()
    //   dispatch (changeBannerList (data.banners));
    // }).catch (() => {
    //   console.log ("轮播图数据传输错误");
    // }) 
  }
}