import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
let i = 1;

var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
var arr = [
    <h1>菜鸟教程</h1>,
    <h2>学的不仅是技术，更是梦想！</h2>,
  ];
ReactDOM.createRoot(document.getElementById('root')).render(
    // <h1>Hello, world!</h1>
    // 嵌套多个 HTML 标签，需要使用一个 div 
    // 元素包裹它，实例中的 p 元素添加了自定义属性 
    // data-myattribute，添加自定义属性需要使用 data- 前缀。
    // <div>
    //     <h1>菜鸟教程</h1>
    //     <h2>欢迎学习 React</h2>
    //     <p className="f20" data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
    // </div>
    // 可以在 JSX 中使用 JavaScript 表达式 {}
    // <div>
    //   <h1>{1+1}</h1>
    // </div>
    // 在 JSX 中不能使用 if else 语句，
    // 但可以使用 conditional (三元运算) 表达式来替代
    // <div>
    //   <h1>{i == 1 ? 'True!' : 'False'}</h1>
    // </div>
    // React 推荐使用内联样式 我们可以使用 camelCase 语法来设置内联样式. 
    // React 会在指定元素数字后自动添加 px
    // <h1 style = {myStyle}>菜鸟教程</h1>
    // JSX 允许在模板中插入数组，数组会自动展开所有成员
    <div>{arr}</div>

)