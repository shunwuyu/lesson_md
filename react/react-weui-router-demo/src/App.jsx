import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,  Route} from 'react-router-dom'
import BDTab from './pages/tab';
import BDDetail from './pages/detail';
import BDUser from './pages/user';
import BDLogin from './pages/login';

function App() {

  return (
    <>
      <Routes>
        <Route path="/"  element={<BDTab/>} />
        <Route path="/detail"  element={<BDDetail/>} />
        <Route path="/user"  element={<BDUser/>} />
        <Route path="/login"  element={<BDLogin/>} />
      </Routes>
    </>
  )
}

export default App
