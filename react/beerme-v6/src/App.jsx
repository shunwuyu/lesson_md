import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes , Route   } from 'react-router'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Beer from './Beer.jsx'

function App() {

  return (
    <div className="App">
      <HashRouter>
          <Routes>
            <Route exact  element={<Home />}
                    path="/"></Route>
            <Route element={<Beer />}
                    path="/beer/:beerId/:beerSlug"></Route>
          </Routes>
      </HashRouter>
    </div>
  )
}

export default App
