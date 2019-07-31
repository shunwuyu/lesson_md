import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';
import user from './modules/user';
Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  modules: {
    user
  },
})

export default store
