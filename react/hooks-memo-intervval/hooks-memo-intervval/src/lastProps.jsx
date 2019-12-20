import React, { Component, useEffect, useRef, useState } from 'react';
function Example () {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    console.log(document.getElementById('btn'));
    prevCountRef.current = count
  });

  const prevCount = prevCountRef.current
  console.log(prevCount, count, '之前的状态和现在的状态')
  return (
    <div>
      <div>{count}</div>
      <button id="btn" onClick={() => {setCount(count+1)}}>+</button>
    </div>
  )
}

export default Example;