import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { LoginContainer } from "./pages/login.container";
import { PageB } from "./pages/pageB";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<LoginContainer/>} />
        <Route path='/pageB' element={<PageB/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
