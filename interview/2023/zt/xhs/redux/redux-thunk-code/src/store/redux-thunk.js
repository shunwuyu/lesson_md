function createThunkMiddleware(extraArgument) {
    
    return ({ dispatch, getState }) => next => action => {
        // 如果action是函数，即thunk函数， 直接执行thunk函数
        if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
        }

        // 如果acton不是函数， 调用原生的dispatch方法派发Action， 修改state
        return next(action);
    };
}
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk