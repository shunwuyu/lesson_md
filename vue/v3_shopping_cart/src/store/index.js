import Vue{ createStore} from 'vuex'
import products from './modules/products'

export default createStore({
    modules: {
        products
    }
})
