import { Suspense } from 'react'
import './App.css'
import Routes from '@/routes/index'
import { GlobalStyle } from "./style";
import '@/assets/icon.css'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <div className="view">
        <Suspense fallback={null}>
          <Routes/>
        </Suspense>
      </div>
    </div>
  )
}

export default App
