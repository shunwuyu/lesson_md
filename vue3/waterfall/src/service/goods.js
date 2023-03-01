import axios from './config.js'

export const getGoods = () => {
    return axios.get('/goods')
}