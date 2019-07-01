import React, { useState } from 'react';
let id = 0
function Count() {
  // useState 唯一的参数就是初始 state
  // return:当前状态  一个让你更新它的函数
  const [count, setCount] = useState(0)
  // const [name, setName] = useState('小智')
  if (true) {
    // const [count, setCount] = useState(0)
  }

  return (
    <button type="button"
      onClick={() => { setCount(count + 1) }}
    >
      Click({count})
      </button>

  )
}

export default Count;