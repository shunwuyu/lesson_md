import { useState } from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import AppFooter from './components/common/AppFooter'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cities from './pages/Cities'
import HomeDetail from './pages/HomeDetail'
import HomeOrder from './pages/HomeDetail/HPage/Order'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/cities" element={<Cities />}/>
        <Route path="/homedetail" element={<HomeDetail />}>
          <Route path="/homedetail/order" element={<HomeOrder/>}/>
        </Route>
      </Routes>
      <AppFooter />
    </div>
  )
}

export default App
