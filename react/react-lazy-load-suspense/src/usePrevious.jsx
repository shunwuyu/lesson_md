import React, { Component, useState, useRef, useEffect } from 'react';


const usePrevious = value => {
  // 和自建一个 {current: ...} 对象的唯一区别是，
  // useRef 会在每次渲染时返回同一个 ref 对象
  const ref = useRef();
  console.log('props 初始化 ref', ref);
  // 先 render 再 componentDidMount
  useEffect(() => {
    ref.current = value;
    console.log('did, 修改 ref', ref.current)
  });
  console.log('render ref', ref)
  return ref.current;
}
const Demo = () => {
  let [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <h1>
      Now: {count}, before: {prevCount}
      <button onClick={() => {
        count ++
        setCount(count);
      }}>change</button>
    </h1>
  );
}
export default Demo;