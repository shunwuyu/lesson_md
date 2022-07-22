import { useState, useEffect, Suspense } from 'react'
import logo from './logo.svg'
import './App.css'
import { getSuggests } from '@/api/search'
import Routes from '@/routes/index'
// import { IconStyle } from "@/assets/fonts/icon";
import { GlobalStyle } from "./style";
import '@/assets/icon.css'

function App() {
  useEffect(() => {
    getSuggests('周')
  }, [])
  return (
    <div className="App">
      <GlobalStyle/>
      {/* <IconStyle /> */}
      <div className="view">
        <Suspense fallback={null}>
          <Routes/>
        </Suspense>
      </div>
    </div>
  )
}

export default App
