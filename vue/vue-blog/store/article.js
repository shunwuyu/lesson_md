import ajax from '@/assets/scripts/ajax'

export const mutations = {
  setArticles(state, { data, total }) {
    console.log(total)
    // Array.from(data).forEach((i) => {
    //   state.articles.push(i)
    // })
    state.total = total
  },
  setArticlesNull(state) {
    state.articles = []
    state.total = 0
  }
}

export const actions = {
  async getArticles({ state, commit }, params) {
    const ret = await ajax.get('/articles', {
      params: {
          limit: state.limit,
          ...params,
      },
    })
    console.log(ret);
    const { data } = ret
    commit('setArticles', {
      data,
      total: ret.total,
    })
    return data
  }
}

export const state = () => ({
    total: 0,
    limit: 15,
})