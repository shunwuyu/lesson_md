import axios from 'axios'

export const getArticleList = params => {
  return axios.get('https://cnodejs.org/api/v1/topics', { params })
}