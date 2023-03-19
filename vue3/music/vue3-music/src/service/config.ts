import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
axios.interceptors.response.use((data) => {
    return data.data
})
export default axios 