import * as actionTypes from './constants';

const initialVal = {
  detail: {}
}

export default function productReducer(state=initialVal, action) {
  // console.log(action.type, '??')
  switch(action.type) {
    case actionTypes.CHANGE_DETAIL:
      state = {
        ...state,
        detail: action.payload
      }
      // console.log(state, '+++++++++')
      return state
      break;
    default:
      return state
  }
}