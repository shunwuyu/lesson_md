import axios from 'axios'
export const getSuggestList = query => {
    return axios.get(`http://localhost:3300/search/suggest?keywords=${query}`);
};

export const getHotList = () => {
    return axios.get('http://localhost:3300/search/hot')
}