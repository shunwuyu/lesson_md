import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const Demo = () => {
  return (
    <section onClick={(e) => console.log("click section")}>
      <h3>你好</h3>
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("click button");
        }}
      >
        点击
      </button>
    </section>
  )
}

function App() {
  return (
    <Demo/>
  )
}

export default App
