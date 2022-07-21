import { useState, useEffect, Suspense } from 'react'
import logo from './logo.svg'
import './App.css'
import { getSuggests } from '@/api/search'
import Routes from '@/routes/index'
function App() {
  useEffect(() => {
    getSuggests('周')
  }, [])
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Routes/>
      </Suspense>
    </div>
  )
}

export default App
