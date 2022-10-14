import * as actionTypes from '../actionTypes'

const initialState = {
    login: false
};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                login: true
            }
        default:
            return state
    }
}

export default loginReducer