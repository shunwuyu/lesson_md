import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Address from './Address'
import Login from './Login'
import BDTab from './BDTab'
import Detail from './Detail'
import User from './User'
import { Routes, Route, Link } from "react-router-dom"
function App() {

  return (
    <div className="App">
      {/* <Address /> */}
      {/* <Login/> */}
      {/* <BDTab /> */}
      {/* <Detail /> */}
      <Routes>
        <Route path="/user" element={<User />}></Route>
        <Route path="/address" element={<Address />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
      </Routes>
      {/* <User/> */}
    </div>
  )
}

export default App
