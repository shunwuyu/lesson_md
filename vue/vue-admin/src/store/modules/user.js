import { getToken, setToken } from '@/utils/auth'
const user = {
  state: {
    token: getToken(),
    avatar: 'https://wpimg.wallstcn.com/3fce7247-d863-4e3d-a0de-d30aaef7358a'
  },
  mutations: {

  },
  actions: {
    // 用户名登录
    Login({ commit }, token) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', token)
        setToken(token)
        resolve()
      })
    },
  }
}

export default user
