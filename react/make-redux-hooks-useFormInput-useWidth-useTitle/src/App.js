import React from 'react';
import { createContext, useContext, useReducer, memo } from 'react';
import { CustomHook } from './custom-Hooks';

function reducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case 'UPDATE_HEADER_COLOR':
      return {
        ...state,
        headerColor: 'yellow'
      };
    case 'UPDATE_CONTENT_COLOR':
      return {
        ...state,
        contentColor: 'green'
      };
    default:
      break;
  }
}

// 创建一个context
const Store = createContext(null);
// 作为全局state
const initState = {
  headerColor: 'red',
  contentColor: 'blue'
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  // 在根结点注入全局state和dispatch方法
  return (
    <Store.Provider value={{ state, dispatch }}>
      <CustomHook />
      <Header />
      <Content />
    </Store.Provider>
  );
};

const Header = memo(() => {
  // 拿到注入的全局state和dispatch
  console.log(useContext(Store));
  const { state, dispatch } = useContext(Store);
  return (
    <header
      style={{ backgroundColor: state.headerColor }}
      onClick={() => dispatch({
        type: 'UPDATE_HEADER_COLOR'
      })}
    >
      header
      </header>
  );
});

const Content = memo(() => {
  const { state, dispatch } = useContext(Store);
  return (
    <div
      style={{ backgroundColor: state.contentColor }}
      onClick={() => dispatch({
        type: 'UPDATE_CONTENT_COLOR'
      })}
    >
      Content
      </div>
  );
});
export default App;