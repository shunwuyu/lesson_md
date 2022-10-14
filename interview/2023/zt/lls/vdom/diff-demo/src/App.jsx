import { useState } from 'react'

class Component {
  vdom = null // 组件的虚拟DOM表示
  $el  = null // 虚拟DOM生成的真实节点

  state = {
    text: 'Initialize the Component'
  }
  
  render() {
    const { text } = this.state
    return (
      <div>{ text }</div>
    )
  }
}


function App() {

  return (
    <div className="App">
      
    </div>
  )
}

export default App
