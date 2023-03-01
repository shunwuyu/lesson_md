import axios from 'axios'

axios.defaults.baseURL = '//backend-api-01.newbee.ltd/api/v1'

axios.interceptors.response.use(res => {
    
   return res.data
})

export default axios