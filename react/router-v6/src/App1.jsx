import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes , Route , Outlet  } from 'react-router'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Menus from './Menus'
import Home from './Home'
import List from './List'

function App() {

  return (
    <div className="page" >
      <div className="content" >
        {/* <BrowserRouter > */}
        <HashRouter>
          <Menus />
          <Routes>
            <Route element={<Home />}
                  path="/home"></Route>
            <Route element={<List/>}
                  path="/list"
              ></Route>
            
          </Routes>
        </HashRouter>
        {/* </BrowserRouter> */}
      </div>
    </div>
  )
}

export default App
