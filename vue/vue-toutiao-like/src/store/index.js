import Vue from 'vue';
import Vuex from 'vuex';
import layout from './module/layout';
// import getter from './getter.js';
// $store.layout.state.footbarlist
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    layout
  }
})