import * as actionTypes from '../actionTypes'

export const changeLoginAction = () => ({
    type:actionTypes.USER_LOGIN_SUCCESS
})

export const asyncChangeLoginAction = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(changeLoginAction()) 
        }, 1000)
    }
}