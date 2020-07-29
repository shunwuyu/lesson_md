import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,   // 是否登录
    userInfo: null, // 用户信息
    cartList: [],   // 加入购物车列表 
  },
  mutations,
  actions
})
