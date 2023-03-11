import axios from '../config'
export const getBanners = () => 
    axios.get('/banner')
export const getRecommendPlayLists = () => 
    axios.get('/personalized')
export const getOwnerSendLists = () => 
    axios.get('/personalized/privatecontent')
export const getLatestSongLists = () => 
    axios.get('/personalized/newsong', {
        params: {
            limit: 12
        }
    })
export const getRecomendMvLists = () => 
    axios.get('/personalized/mv')