import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

const store = new Vuex.Store({
    modules: {
        user
    },
    // getters
    getters
})

export default store