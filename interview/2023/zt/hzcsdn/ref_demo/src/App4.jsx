import React, { useState } from 'react'

// 表单组件Input的值通过onChange回调交给React处理
// React获取到表单的值(e.target.value)之后，将其保存到了状态变量name中
// 界面展示内容通过读取组件状态name，因此name的变化触发<div>hello {name}</div>的重新渲染
export default function App() {
    const [name, setName] = useState('');
  
    const handleNameChange = e => {
      setName(e.target.value);
    }
  
    return (
      <div className="App">
        <div>hello {name}</div>
        姓名：<input onChange={handleNameChange} />
      </div>
    );
  }
