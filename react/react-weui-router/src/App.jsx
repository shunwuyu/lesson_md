import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'weui'
import 'react-weui/build/packages/react-weui.css'
import User from './User'
import Address from './Address'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to="/user">用户</Link>
      {/* <User /> */}
      {/* 一切皆组件-》  先有路由-》 再有页面级别组件-》组件构成页面   路由配置 */}
      <Routes>
        <Route path="/user" element={<User />}></Route>
        <Route path="/address" element={<Address />}></Route>
      </Routes>
    </div>
  )
}

export default App
