import axios from 'axios'
import { localGet } from '@/utils/index.js'

axios.defaults.baseURL = 'http://backend-api-02.newbee.ltd/manage-api/v1/'
// XMLHttpRequest的一个属性 跨域请求是否提供凭据信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers['token'] = localGet('token') || ''

axios.interceptors.response.use(res => {
    return res.data
})

export default axios