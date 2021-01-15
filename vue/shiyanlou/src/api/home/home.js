import axios from 'axios'
import {apiUrl} from '@/api/base.js'

export default {
  get_classfication_courses () {
    return axios.get(apiUrl + 'v2/index/classfication-courses')
  },
}