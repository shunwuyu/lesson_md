import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// 架构中store 模块 
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 外面再包一层 数据管理功能   项目做大了， 企业里的财务
  // 路由， SPA BrowserRouter？ react-router-dom  组件
  // react 申明式开发]
  <Provider store={store}>
    <Suspense fallback={null}>
      <BrowserRouter>
        {/* react 组件 */}
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>
)
