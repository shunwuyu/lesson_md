import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Detail from './Detail'

function App() {
  // 如何设计？ https://juejin.cn/post/7083401121486045198
  // http://localhost:3000/detail/1/shunwu
  const navigate = useNavigate();
  useEffect(() => {
    // history.push('/detail/2/zora')
    // navigate('/detail/2/zora')
    navigate('/detail?id=2')
  }, [])

  return (
    <>
      <Routes>
        <Route element={<Detail/>}
        path="/detail"></Route>
        {/* <Route element={<Detail/>}
        path="/detail/:id/:name"></Route> */}
      </Routes>
    </>
  )
}

export default App
