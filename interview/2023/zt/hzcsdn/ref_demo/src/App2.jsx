import React, { Component, useEffect, useRef } from 'react';
function App() {
  const childRef = useRef();
  useEffect(() => {
    console.log('useRef')
    console.log(childRef.current)
    childRef.current.handleLog();
  }, [])
  return (
    <div>
      <h1>Hello World!</h1>
      <Child ref={childRef} count="1"/>
    </div>
  )
}
// 因为函数组件没有实例，如果想用ref获取子组件的实例，子组件组要写成类组件
class Child extends Component {
    handleLog = () => {
      console.log('Child Component');
    }
    render() {
      const { count } = this.props;
      return <h2>count: { count }</h2>
    }
  }
  export default App;
  