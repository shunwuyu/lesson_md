import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const Header = () => {
  return (
    // <div>
    //   <h1>React 小书</h1>
    // </div>
    React.createElement(
      "div",
      null,
      React.createElement("h1", null, "React小书!!!")
    )
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
)
