const { createStore, applyMiddleware } = require('redux');
const thunk  = require('redux-thunk').default;
const reducer = require('./reducer/index');

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
const actionAsync = (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'ADD_FILM',
      id: 2,
      name: '流浪地球'
    })
  }, 3000);
}
store.subscribe(() => {
  console.log('store 发生了变化', store.getState());
})
store.dispatch({
  type: 'ADD_FILM',
  id: 0,
  name: '武松打虎'
})
store.dispatch({
  type: 'ADD_FILM',
  id: 1,
  name: '武松打虎1'
})
store.dispatch({
  type: 'DELETE_FILM',
  id: 0,
  name: '武松打虎1'
})
store.dispatch({
  type: 'CHANGE_FILTER_TYPE',
  filter: 'filterChange'
})
store.dispatch(actionAsync)
