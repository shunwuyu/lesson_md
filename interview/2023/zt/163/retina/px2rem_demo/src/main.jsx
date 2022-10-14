import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {setDomFontSize} from './utils/dom'
setDomFontSize()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
