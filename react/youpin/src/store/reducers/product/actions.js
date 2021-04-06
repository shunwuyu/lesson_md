import * as actionTypes from './constants';
import api from '../../../api/index';

export const changeDetail = (payload) => ({
  type: actionTypes.CHANGE_DETAIL,
  payload: payload
})


export const getProductDetail = (id) => {
  // console.log('-----------', id);
  return (dispatch) => {
    api.product.info(id)
      .then(data => {
        // console.log(data, 'detail');
        dispatch(changeDetail(data.data))
      })
  }
};