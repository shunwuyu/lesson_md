import Vue from 'vue'
import App from './App.vue'
import router from './router'

import apollo from './apollo'

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: apollo,
  render: h => h(App)
}).$mount('#app')