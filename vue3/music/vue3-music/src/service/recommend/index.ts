import axios from '../config'
export const getBanners = () => 
    axios.get('/banner')
export const getRecommendPlayLists = () => 
    axios.get('/personalized')
