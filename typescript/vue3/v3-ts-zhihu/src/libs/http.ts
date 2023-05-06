import axios from 'axios'
import store from '../store'

axios.interceptors.request.use(config => {
    store.commit('setLoading', true)
    store.commit('setError', { status: false, message: '' })
    return config
})

axios.interceptors.response.use(resp => {
    store.commit('setLoading', false)
    return resp
}, e => {
    const { error } = e.response.data
    store.commit('setError', { status: true, message: error })
    store.commit('setLoading', false)
    return Promise.reject(error)
})

export { axios }