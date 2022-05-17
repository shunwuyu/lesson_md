import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'

// 如何理解 root 根节点
// 此 div 中的所有内容都将由 React DOM 来管理
// 我们用 React 开发应用时一般只会定义一个根节点

// const element = <h1>Hello, world!</h1>;  // jsx 
// ReactDOM.createRoot(document.getElementById('root')).render(
//   // 要将React元素渲染到根DOM节点中，我们通过把它们都传递给
//   //  ReactDOM.render() 的方法来将其渲染到页面上
//   element
// )

// 把当前时间显示
// const element = (
//   <div>
//     <h1>Hello, world!</h1>
//     <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
//   </div>
// );

  
// ReactDOM.createRoot(
//   document.getElementById('root')
// ).render(
//   element
// )
// 组件   传参
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

const App = () => {
  let [date, setData] = useState(new Date());
  setInterval(() => {
    setData(new Date())
  }, 1000)
  return (
    // <Clock  date={new Date()}/>
    <Clock  date={date}/>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // 要将React元素渲染到根DOM节点中，我们通过把它们都传递给
  //  ReactDOM.render() 的方法来将其渲染到页面上
  <App/>
)







