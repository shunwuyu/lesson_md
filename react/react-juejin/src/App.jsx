import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Xiaoce from './pages/xiaoce'
import './App.css'
import Header from './components/common/header'

function App() {

  return (
    <div className="App">
      <Header />
      {/* <Routes>
        <Route path="/xiaoce" element={<Xiaoce />} />
      </Routes> */}
    </div>
  )
}

export default App
