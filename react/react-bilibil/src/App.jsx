import { useState, Suspense } from 'react'
import { Helmet } from "react-helmet";
import RouterConfig from './router'
import logo from './logo.svg'
import './App.css'
import { GlobalStyle } from "./style";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Helmet>
        <title>( ゜- ゜)つロ干杯~</title>
        <meta name="title" content="Bilibili-( ゜- ゜)つロ干杯~" />
        <meta name="keywords" content="React,服务端渲染" />
        <meta name="description" content="高仿Bilibili" />
      </Helmet>
      <Suspense fallback={null}>
        <RouterConfig />
      </Suspense>
    </div>
  )
}

export default App
