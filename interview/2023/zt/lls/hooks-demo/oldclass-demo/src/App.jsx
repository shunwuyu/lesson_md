import { useState, useEffect } from 'react'
import Home from './Home'

// function App() {
//   const [visible, setVisible] = useState(true)
//   let [count, setCount] = useState(0)
//   return (
//     <div className="App">
//       {visible && <Home count={count}/>}
//       <button onClick={() =>setVisible(!visible) }>切换</button>
//       <button onClick={() =>setCount((prev) => setCount(prev)) }>设置但不变</button>
//       <button onClick={() =>setCount(count+1) }>设置但改变</button>
//       <button onClick={() =>setCount(count+1) }>设置但偶数才改变</button>
//     </div>
//   )
// }

const useMount = (fn) => {

  useEffect(() => {
    fn?.();
  }, []);
};

function App() {
  useMount(() => {
    console.log('挂载成功');
  })
  return (
    <div>
      App
    </div>
  )
}

export default App
