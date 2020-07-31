import React, { useRef, useState, useEffect } from 'react'
//比ref 更有用， 很方便地保存任何可变值
const Example8 = () => {
  const inputRef = useRef(null);
  const textRef = useRef();
  const handleClick = () => {
    inputRef.current.value = 'hello, nihao'
    console.log(inputRef);
  }

  const [state, setState] = useState('initialState')
  useEffect(() => {
    textRef.current = state
  })
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>在input上展示文字</button>
      <br/>
      <input value={state} type="text" onChange={(e)=>setState(e.target.value)}/>
    </>
  )
}

export default Example8