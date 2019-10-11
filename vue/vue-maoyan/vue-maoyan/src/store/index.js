import Vue from 'vue';
import Vuex from 'vuex';
import state from './states';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations, // 同步
  actions // 异步
})

export default store;