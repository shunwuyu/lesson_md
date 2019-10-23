import { getArticleList } from '@/api/articles'
import * as types from './action-types'

export const state = () => ({
  list: []
})

export const getters = {
  list(state) {
    return state.list
  }
}

export const mutations = {
  [types.CHANGE_LIST](state, list) {
    state.list = list
  },
  [types.CLEAR_LIST](state, list) {
    state.list = []
  },
  [types.ADD_LIST](state, list) {
    state.list = [...state.list, ...list]
  }
}

export const actions = {
  async [types.CHANGE_LIST.toLowerCase()]({ commit }, params) {
    const result = await getArticleList(params)
    commit(types.CHANGE_LIST, result.data.data)
  },
  [types.ADD_LIST.toLowerCase()]({ commit }, data) {
    commit(types.ADD_LIST, data)
  }
}
