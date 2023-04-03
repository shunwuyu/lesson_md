import { createStore, Commit } from 'vuex'
import { GlobalDataProps } from '../types'
import { axios, AxiosRequestConfig } from '../api/config'
import { arrToObj, objToArr } from '../utils'

const asyncAndCommit = async (url: string, mutationName: string, commit: Commit,
    config: AxiosRequestConfig = { method: 'get' }, extraData?: any) => {
    const { data } = await axios(url, config)
    if (extraData) {
      commit(mutationName, { data, extraData })
    } else {
      commit(mutationName, data)
    }
    return data
}

const store = createStore<GlobalDataProps>({
    state: {
        columns: { data: {}, currentPage: 0, total: 0 },
    },
    getters: {
        getColumns: (state) => {
            return objToArr(state.columns.data)
        },
    },
    mutations: {
        fetchColumns (state, rawData) {
            const { data } = state.columns
            const { list, count, currentPage } = rawData.data
            console.log(list, count, currentPage)
            console.log()
            state.columns = {
                data: { ...data, ...arrToObj(list) },
                total: count,
                currentPage: currentPage * 1
            }
        }
    },
    actions: {
        fetchColumns ({ state, commit }, params = {}) {
            const { currentPage = 1, pageSize = 6 } = params
            console.log(currentPage, pageSize)
            if (state.columns.currentPage < currentPage) {
                return asyncAndCommit(`/api/columns?currentPage=${currentPage}&pageSize=${pageSize}`, 'fetchColumns', commit)
            }
        }
    }
})

export default store