import Cookies from 'js-cookie'
const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
}

const mutations = {
}

const actions = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
