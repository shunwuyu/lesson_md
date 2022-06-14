import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Modal from './modal'

function App() {
  const [visible, setVisible] = useState(false)
  const showModal = () => {
    setVisible(true)
  }
  return (
    <div className="App">
      {/* <Modal /> */}
      {/* <Modal visible={visible}/> */}
      <Modal 
        visible={visible}
        title="这是自定义title"
      >
        这是自定义content
      </Modal>
      <button onClick={showModal}>click here</button>
    </div>
  )
}

export default App
