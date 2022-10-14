import { useState, useEffect } from 'react'
import { YzmButton } from './YzmButton'

function App() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 15000)
  }, [])
  return (
    <div className="App">
      {show && <YzmButton />}
    </div>
  )
}

export default App
