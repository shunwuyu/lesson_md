import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App2'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  <HashRouter>
    <App />
  </HashRouter>
  // </BrowserRouter>
)
