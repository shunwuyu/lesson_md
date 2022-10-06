// import { getToken, setToken, removeToken } from '@/utils/auth'
import { getToken } from '@/utils/auth'

const state = {
    token: getToken(),
}

const mutations = {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}