import axios from './config.js'

export const getCarousels = (params) => {
    return axios.get('/carousels', params);
}