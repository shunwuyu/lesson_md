import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from './redux-source/index'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

function createThunkMiddleware(extraArgument) {
  // start
  /**
  next
  var a = compose(...chain)
    console.log('compose 的结果', a);
    dispatch = a(store.dispatch)
    即是：store.dispatch
  */
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    console.log('thunk dispatch', next);
    return next(action);
  };
  // end
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
const logger = ({ getState, dispatch }) => next => action => {
  console.log('【logger】即将执行:', action)
    // 调用 middleware 链中下一个 middleware 的 dispatch。
  console.log('log dispatch', next);
  let returnValue = next(action)
  console.log('【logger】执行完成后 state:', getState())
  return returnValue
}
/**
 * applyMiddleware(logger, thunk)
 * action => {
    console.log('【logger】即将执行:', action)
      // 调用 middleware 链中下一个 middleware 的 dispatch。
    let returnValue = (
      action => {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }
        return 原始 dispatch(action);
      }
    )(action)
    console.log('【logger】执行完成后 state:', getState())
    return returnValue
  }
 */

 /**
  * action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    // ()里面的为 log 的返回体 
    return (
      action => {
        console.log('【logger】即将执行:', action)
          // 调用 middleware 链中下一个 middleware 的 dispatch。
        let returnValue = next(action)
        console.log('【logger】执行完成后 state:', getState())
        return returnValue
      }
    )(action);
  };
  */
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
  // applyMiddleware(logger, thunk)
  )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
