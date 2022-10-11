import * as types from '../constants/actionTypes'
import api from '../../api/shop'

const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products: products
})

export const getProducts = () => dispatch => {
    api.getAllProducts((data) => {
        dispatch(receiveProducts(data))
    })
}

export const getProductDetail = (id) => ({
    type: types.SET_PRODUCT,
    data: id
})