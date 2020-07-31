import React, { Component } from 'react';
function getUserName() {
  // return 'username: lilei'
  return null;
}
const Login = (props) => {
  const userName = getUserName();
  if (userName) {
    const allProps = { userName, ...props };
    return (
      <React.Fragment>
        {props.children(allProps)}
      </React.Fragment>
    );
  } else {
    return null;
  }
};
// 可以把传递下来的多个 props 组合
const Auth = (props) => {
  const userName = getUserName();

  if (userName) {
    const allProps = { userName, ...props };
    return (
      <React.Fragment>
        {props.login(allProps)}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {props.nologin(props)}
      </React.Fragment>
    )
  }
};
class App extends Component {
  render() {
    return (
      // <Login>
      //   {({ userName }) => <h1>Hello {userName}</h1>}
      // </Login>
      <Auth
        login={({userName}) => <h1>Hello {userName}</h1>}
        nologin={() => <h1>Please login</h1>}
      />
    );
  }
}
/**
 * 有了 renderProps
 * 现在 可以 把组件共有的逻辑放到 一个组件里面
 * 在调用 该组件时候 传递一个 function 类型的 props
 * 在 function 里面 通过参数收到 共有的逻辑 以此判断 在不同的组件里面处理 不同组件的结果
 */
/**
 * 对比
 * render props： 模式的应用，就是做一个 React 组件，
 * 而高阶组件： 虽然名为“组件”，其实只是一个产生 React 组件的函数
 */
export default App;
