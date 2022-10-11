import { createStore } from 'vuex';

export default createStore({
    state: {
        userInfo: JSON.parse(sessionStorage.getItem('useInfo') || '{}'),
    },
    getters: {
        userInfo: state => state.userInfo
    },
    mutations: {
        changeUserInfo(state, payload) {
            state.userInfo = payload;
        }
    },
    actions: {
        EDIT_USER_INFO({ commit }, payload) {
            return new Promise((res,rej)=>{
                commit('changeUserInfo', payload || {});
                sessionStorage.setItem('useInfo', JSON.stringify(payload));
                res(12233);
            })
        }
    },
    modules: {}
});