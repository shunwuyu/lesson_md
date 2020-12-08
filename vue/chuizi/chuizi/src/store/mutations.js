import {
  RECORD_USERINFO,
} from './mutation-types'
import { setStore, getStore } from '../utils/storage'
export default {
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
    setStore('userInfo', info)
  }
}