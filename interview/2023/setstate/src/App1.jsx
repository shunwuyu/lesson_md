import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setCount(1)
      console.log(count);
      setCount(2)
      console.log(count);
    }, 0);
  }, [])
  console.log('render:', count)
  return (
    <div className="App">
      {count}
    </div>
  )
}

export default App
