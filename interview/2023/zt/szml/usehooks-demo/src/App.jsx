import { useState, useEffect } from 'react'
import usehooks from './hooks'
function App() {
  const {data,send,error,loading} = usehooks({url: 'https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue/goods'})
  useEffect(() => {
    send()
  }, [])
  return (
    <div className="App">
      {JSON.stringify(data)}
    </div>
  )
}

export default App
