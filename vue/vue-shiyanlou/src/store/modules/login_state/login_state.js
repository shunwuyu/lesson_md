import cookies from 'vue-cookies'
// cookies.set('session', '123')
const state = {
  // 登录 cookie  session  
  sign_on: cookies.get('session') ? true : false,
}

export default {
  namespaced: true,
  state
}