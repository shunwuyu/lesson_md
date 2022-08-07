import { useState, useEffect } from 'react'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Login from "./components/Login";
import { getUserBoard } from './api/user'

function App() {
  useEffect(() => {
    getUserBoard()
  }, [])
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          bezKoder
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
        </div>
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
        </div>
      </nav>
      
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
