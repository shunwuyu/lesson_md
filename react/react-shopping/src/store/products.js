import * as types from './constants/actionTypes'
const defaultState = {
    products: [],
    curProduct: {}
}
const products = (state = defaultState, action) => {
    switch (action.type) {
        case types.RECEIVE_PRODUCTS:
            console.log(action)
            return {
                ...state,
                products: action.products
            }
        case types.SET_PRODUCT:
            let product = state.products.find((item) => item.id = action.data)
            console.log(product, '/////')
            return {
                ...state,
                curProduct: product
            }
        default:
            return state
    }
}

export default products