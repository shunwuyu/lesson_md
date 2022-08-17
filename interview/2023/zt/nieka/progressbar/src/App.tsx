import { useState } from 'react'
import ProgressBar from "./progress";
import './progress.css'

function App() {
  const [progressData, setProgressData] = useState({
    step: 5,
    total: 12,
    showInfo: true,
    color: 'lightblue'
  })
  return (
    <div className="App">
      <ProgressBar
          step={progressData.step}
          total={progressData.total}
          showInfo={progressData.showInfo}
          color={progressData.color}
      />
    </div>
  )
}

export default App
