import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/api/getData'
// console.log(api, '-------------')
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
  },
  mutations: {
    setUserInfo(state, payload) {
      // console.log(payload, 'mutations');
      state.userInfo = payload
    }
  },
  actions: {
    accountLogin({commit}, payload) {
      // console.log(arguments);
      // console.log(payload)
      Api.doLogin(payload, (data) => {
        // console.log('api', data);
        commit('setUserInfo', data)
      })
      // doLogin(payload, (data) => {
      //   console.log(data)        
      // })
      // console.log(account, password)
    }
  },
  modules: {
  }
})
