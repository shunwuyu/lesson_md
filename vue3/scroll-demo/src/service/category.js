import axios from './config.js'

export function getCategory() {
  return axios.get('/categories');
}