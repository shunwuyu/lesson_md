export const state = () => ({
  pageName: 'Vuex',
  count: 0
})

export const mutations = {
  // add(state) {
  //   state.count++
  // }
  add(state, number) {
    state.count = state.count + number;
  }
}

export const actions = {
  addAction(context, number) {
    // context.commit('add', number)
    setTimeout(() => {
      context.commit('add', number)
    }, 1000)
  }
}