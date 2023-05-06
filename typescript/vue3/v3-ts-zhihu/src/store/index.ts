import { createStore, Commit } from 'vuex'
import { GlobalDataProps, UserProps } from './types'
import { StorageHandler, storageType } from '../libs/storage'
import { axios, AxiosRequestConfig } from '../libs/http'

const storageHandler = new StorageHandler()

const store = createStore<GlobalDataProps>({
    state: {
        token: storageHandler.getItem(storageType, 'token') || '',
        user: { isLogin: true, nickName: '菜菜' },
        loading: false,
        error: { status: false }
    },
    mutations: {
        logout (state) {
            state.token = ''
            state.user = { isLogin: false }
            storageHandler.remove(storageType, 'token')
            delete axios.defaults.headers.common.Authorization
        }
    }
})

export default store