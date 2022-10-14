import * as actionTypes from '../constants'

const initState = false;
export default function loginReducer(preState = initState, action) {
    const { type, data } = action;
    console.log('----------------', type, data)
    switch (type) {
        case actionTypes.LOGIN:
            return data;
        default:
            return preState;
    }
}