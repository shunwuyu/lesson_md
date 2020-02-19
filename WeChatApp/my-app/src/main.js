import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import I18n from 'vue-i18n'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false
sync(store, router)
Vue.use(I18n)

const i18n = new I18n({
  // locale: 'zh',
  locale: 'en',
  messages: {
    en: {
      hello: 'hello world'
    },
    zh: {
      hello: '你好世界'
    },
  },
})

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
})
