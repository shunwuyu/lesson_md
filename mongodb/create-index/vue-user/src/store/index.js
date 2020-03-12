import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    setUsers (state, payload) {
      state.users = payload
    }
  },
  actions: {
    getUsers(context,) {
      fetch('/api/users')
        .then(data => data.json())
        .then(data => {
          context.commit('setUsers', data)
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
      
    },
    queryTag(context, evt) {
      const tag = evt.target.value;
      // console.log(arguments);
      fetch(`/api/users/tag/` + tag)
      .then(data => data.json())
      .then(data => {
        context.commit('setUsers', data)
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
    } 
  },
  modules: {
  }
})
