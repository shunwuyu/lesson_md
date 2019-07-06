import React from 'react';
import createStore from './createStore';
import Count from './Count';
import List from './demoPureComponent/List'
import Provider from './react-redux/Provider';

function reducers (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state // 没有修改，返回原来的对象
  }
}
const store = createStore(reducers);
function App() {
  return (
    <Provider store = { store }>
      <Count />
      <List />
    </Provider>
  );
}

export default App;
