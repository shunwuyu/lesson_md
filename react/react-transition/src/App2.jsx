import { useState, useLayoutEffect } from 'react'
import logo from './logo.svg'
import _ from 'lodash'
import './App.css'

function App() {
  const [value, setValue] = useState("");
  let currentValue = "";
  useLayoutEffect(() => {
    // 浏览器渲染前移除大量的 dom 节点
    var container = document.getElementsByClassName("container");
    var list = document.getElementsByClassName("list");
    if (list.length) {
      container[0].removeChild(list[0]);
    }
  });
  const handleChange = (e) => {
    // startTransition(() => setValue(e.target.value));
    currentValue = e.target.value;
    console.log(currentValue);
    // _.debounce(() => setValue(currentValue), 300);
    setValue(currentValue);
  };
  return (
    <div className="container">
      <input onChange={handleChange} />
      {/* <input onChange={_.debounce(handleChange, 300)} /> */}
      <div>{value}</div>
      <div className="list">
      {Array(100)
        .fill("a")
        .map((item, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    </div>
  )
}

export default App
