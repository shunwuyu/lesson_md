// VueRouter  Vuex Vue 的全家桶， 周边生态， 
// 都是以插件的方式插入Vue中， 
import VueLoaderInstall from './loading/index.js'

export default {
  install (Vue, options) {
      Vue.use(VueLoaderInstall, options)
  }
}