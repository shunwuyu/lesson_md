<<<<<<< HEAD
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
=======
import Vue from 'vue';
import App from './App.vue';
import store from './store';

new Vue({
  el:'#app',
  store,
  render: h => h(App)
>>>>>>> 095ef74991c8bbd32775125a30b49a57a298cfe4
})
