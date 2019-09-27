import Vue from 'vue'
import App from './App.vue'
import weiboEmoji from './index.js'
Vue.use(weiboEmoji)

new Vue({
  el: '#app',
  render: h => h(App)
})
