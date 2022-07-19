import * as actionTypes from '../constants'

export const loginAction = data => ({
    type: actionTypes.LOGIN,
    data,
});