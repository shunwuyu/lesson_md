import cookies from 'vue-cookies'

const state = {
  sign_on: cookies.get('session') ? true : false,
}

const mutations = {
  change_show_state (state, onOrUp) {
    state.show_login_dialog = !state.show_login_dialog
    if (onOrUp === null) {
        return
    }
    state.onOrUp = onOrUp
  }
}

const actions = {
  change_show_state(context, onOrUp) {
    context.commit('change_show_state', onOrUp)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
