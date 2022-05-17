import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// 使用函数定义了一个组件 自定义的组件
// function HelloMessage() {
//     return <h1>Hello World!</h1>;
// }

function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}

// const element = <HelloMessage />;
const element = <HelloMessage name="Runoob"/>;

function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}


ReactDOM.createRoot(document.getElementById('root')).render(
    // element 
    <div>
        <Name name="菜鸟教程" />
        <Url url="http://www.runoob.com" />
        <Nickname nickname="Runoob" />
    </div>   
)