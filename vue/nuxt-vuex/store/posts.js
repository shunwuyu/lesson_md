export const state = () => ({
  list: []
})

export const mutations = {
  setList(state, list) {
    state.list = list
  },
  removeItem(state, id) {
    state.list = state.list.filter(item => 
      {
        return item.id != id
      }
    )
  }
}

export const actions = {
  async destroyAction(context, id) {
    await this.$axios.delete(`http://localhost:3334/posts/${id}`);
    context.commit('removeItem', id)
  }
}