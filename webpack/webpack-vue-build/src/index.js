import Vue from 'vue'
import App from './App'

// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  render: h => h(App),
  components: { App }
}).$mount('#app')
