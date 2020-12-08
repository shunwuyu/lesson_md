import shop from '../../api/shop'

const state = {
  all: [] //所有的商品 
}

const actions = {
  getAllProducts({commit}) {
    //api请求 
    shop.getProducts((products) => {
      commit('setProducts', products)
    })
  }
}

const mutations = {
  setProducts(state, products) {
    state.all = products
  },
  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id == id);
    product.inventory--;
  }
}

export default {
  namespaced: true,
  actions,
  mutations,
  state
}