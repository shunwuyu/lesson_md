import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Search from './pages/Search'
import { IconStyle } from "./assets/iconfont/iconfont";
import { GlobalStyle } from "./style";
function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/search')
  }, [])
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <Routes>
        <Route path="/search" element={<Search />}/>
      </Routes>
    </>
  )
}

export default App
