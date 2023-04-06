import { createStore, Commit } from 'vuex'
import { GlobalDataProps } from '../types'
import { axios, AxiosRequestConfig } from '../api/config'
import { arrToObj, objToArr } from '../utils'
import { StorageHandler, storageType } from '../utils'

const storageHandler = new StorageHandler()

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
        posts: { data: {}, loadedColumns: {} },
        token: storageHandler.getItem(storageType, 'token') || '',
        user: { isLogin: false }
    },
    getters: {
        getColumns: (state) => {
            return objToArr(state.columns.data)
        },
        getColumnById: (state) => (id: string) => {
            return state.columns.data[id]
        },
        getPostsByCid: (state) => (cid: string) => {
            return objToArr(state.posts.data).filter(post => post.column === cid)
        },
        getLoadedPost: (state) => (id: string) => {
            return state.posts.loadedColumns[id]
        },
        getCurrentPost: (state) => (id: string) => {
            return state.posts.data[id]
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
        },
        fetchColumn (state, rawData) {
            state.columns.data[rawData.data._id] = rawData.data
        },
        fetchPosts (state, { data: rawData, extraData: columnId }) {
            // console.log(rawData, columnId)
            const { data } = state.posts
            const { list, count, currentPage } = rawData.data
            state.posts.data = { ...data, ...arrToObj(list) }
            state.posts.loadedColumns[columnId] = {
              columnId: columnId,
              total: count,
              currentPage: currentPage * 1
            }
        },
        fetchPost(state, rawData) {
            state.posts.data[rawData.data._id] = rawData.data
        }
    },
    actions: {
        fetchColumns ({ state, commit }, params = {}) {
            const { currentPage = 1, pageSize = 6 } = params
            console.log(currentPage, pageSize)
            if (state.columns.currentPage < currentPage) {
                return asyncAndCommit(`/api/columns?currentPage=${currentPage}&pageSize=${pageSize}`, 'fetchColumns', commit)
            }
        },
        fetchColumn ({ state, commit }, cid) {
            if (!state.columns.data[cid]) {
              return asyncAndCommit(`/api/columns/${cid}`, 'fetchColumn', commit)
            }
        },
        fetchPosts ({ state, commit }, params = {}) {
            const { columnId, currentPage = 1, pageSize = 3 } = params
            const loadedPost = state.posts.loadedColumns[columnId]
            if (!loadedPost) {
                return asyncAndCommit(`/api/columns/${columnId}/posts?currentPage=${currentPage}&pageSize=${pageSize}`, 'fetchPosts', commit, { method: 'get' }, columnId)
              } else {
                const loadedPostCurrentPage = loadedPost.currentPage || 0
                if (loadedPostCurrentPage < currentPage) {
                  return asyncAndCommit(`/api/columns/${columnId}/posts?currentPage=${currentPage}&pageSize=${pageSize}`, 'fetchPosts', commit, { method: 'get' }, columnId)
                }
              }
        },
        fetchPost ({ state, commit }, id) {
            const currentPost = state.posts.data[id]
            // 没有获取过 或者 没有详细内容的话要发送请求
            if (!currentPost || !currentPost.content) {
              return asyncAndCommit(`/api/posts/${id}`, 'fetchPost', commit)
            } else {
              return Promise.resolve({ data: currentPost })
            }
        }
    }
})

export default store