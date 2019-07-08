import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
export default function configStore () {
  // createStore 返回实例 单一状态树
  // vuex 四部分， 
  // redux state reducer(函数,返回状态) 概念
  // action 返回新的状态 没有mutations
  const store = createStore(rootReducer);
  return store;
}