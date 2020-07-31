import compose from './compose'

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
export default function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    // 接收 createStore 参数
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error(
        'Dispatching while constructing your middleware is not allowed. ' +
          'Other middleware would not be applied to this dispatch.'
      )
    }
    // 传递给中间件的参数
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => {
        // 收到 args 为：一个action 
        // dispatch 为： action => { // thunk 函数体  }
        return dispatch(...args)
      }
    }
    // // 注册中间件调用链，并由此可知，所有的中间件最外层函数接收的参数都是{getState,dispatch}
    // chain:[next => {}, next => {}]
    // 从后往前执行，会把后面的执行结果交给前面这个中间件
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    var aaa = compose(...chain);
    dispatch = aaa(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}
