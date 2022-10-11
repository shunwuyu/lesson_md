import { createStore, compose, applyMiddleware } from 'redux';
// 组件  中间件redux-thunk   数据
import thunk from 'redux-thunk' // 异步数据管理
import reducer from './reducer'

const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, 
    // 组合函数
    // devtool
    composeEnhancers(
        // 异步 
        applyMiddleware(thunk)
    )    
)

export default store;
