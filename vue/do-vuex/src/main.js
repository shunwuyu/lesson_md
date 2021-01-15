// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from './myVuex/index'
Vue.use(Vuex);

Vue.config.productionTip = false

let store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getStatePlusOne(state) {
        return state.count + 1
    }
  },
  mutations: {
    incrementFive(state) {
        state.count = state.count + 5;
    },
    plusSix(state) {
      state.count = state.count + 6;
    }
  },
  actions: {
    countPlusSix(context) {
        context.commit('plusSix');
    }
  },
}, Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
