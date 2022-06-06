import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// 浏览器路由， 路由这块有专门的react-router 负责 
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 路由功能是需要主动开启
  <BrowserRouter>
    {/* 根组件 */}
    <App />
  </BrowserRouter>
)
