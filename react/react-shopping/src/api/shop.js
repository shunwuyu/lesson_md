import _products from './shop.json'

export default {
    getAllProducts(cb) {
        setTimeout(() => {
            cb(_products)
        }, 1000)
    }
}