import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BasicLayout />}></Route>
      </Routes>
    </div>
  )
}

export default App
