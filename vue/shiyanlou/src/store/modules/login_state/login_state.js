const state = {
  on_or_up: 'on', //默认是登录框
  show_login_dialog: false,
  sign_on: false,
  user_info: {
    id: 1,
    avatar_url: 'https://avatars2.githubusercontent.com/u/10172415?s=40&v=4'
  }
}
const mutations = {
  change_show_state (state, onOrUp) {
    state.show_login_dialog = !state.show_login_dialog
    if (onOrUp === null) {
        return
    }
    state.on_or_up = onOrUp
  },
  change_on_up_state (state, onOrUp) {
    state.on_or_up = onOrUp
  }
}
const actions = {
  change_show_state (context, onOrUp) {
    context.commit('change_show_state', onOrUp)
  },
  change_on_up_state(context, onOrUp) {
    context.commit('change_on_up_state', onOrUp)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}