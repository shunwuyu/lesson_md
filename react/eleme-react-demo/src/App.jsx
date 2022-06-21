// import { useState } from 'react'
import { useState, lazy, Suspense } from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import AppFooter from './components/common/AppFooter'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cities from './pages/Cities'
// import HomeDetail from './pages/HomeDetail'
import HomeOrder from './pages/HomeDetail/HPage/Order'
import HomeComment from './pages/HomeDetail/HPage/Comment'
import HomeBusiness from './pages/HomeDetail/HPage/Business'
const HomeDetail = lazy(() => import('./pages/HomeDetail'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/cities" element={<Cities />}/>
        <Route path="/homedetail/:id"  element={<HomeDetail />}>
          <Route path="/homedetail/:id/order" element={<HomeOrder/>}/>
          <Route path="/homedetail/:id/comment" element={<HomeComment/>}/>
          <Route path="/homedetail/:id/business" element={<HomeBusiness/>}/>
        </Route>
      </Routes>
      <AppFooter />
    </div>
  )
}

export default App
