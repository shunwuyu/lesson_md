// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from "vue-i18n";
import i18n from "./lang";

Vue.config.productionTip = false

Vue.use(VueI18n, {
  i18n: (key, value) => i18n.t(key, value)
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  i18n,
  template: '<App/>'
})
