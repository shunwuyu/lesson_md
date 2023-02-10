import axios from 'axios'
import router from '../router'
import { showToast, showFailToast } from 'vant'

// axios.defaults.baseURL = 'https://www.fastmock.site/mock/995214af813bc47208cf2fcb558907e6/mall'
axios.defaults.baseURL = '//backend-api-01.newbee.ltd/api/v1'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'
export default axios

axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        showFailToast('服务端异常！')
        return Promise.reject(res)
    }
    if (res.data.resultCode != 200) {
        if (res.data.message) showFailToast(res.data.message)
        if (res.data.resultCode == 416) {
            router.push({ path: '/login' })
        }
        if (res.data.data && window.location.hash == '#/login') {
            setLocal('token', res.data.data)
            axios.defaults.headers['token'] = res.data.data
        }
        return Promise.reject(res.data)
    }
    return res.data
})