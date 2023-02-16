import axios from './config.js'

export const getCarousels = (params) => {
    return axios.get('/carousels', params);
}

export const deleteCarousels = (params) => {
    return axios.delete('/carousels', params)
}

export const addCarousel = (params => {
    return axios.post('/carousels', params);
})