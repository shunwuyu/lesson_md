import React, { Component, createContext, useContext } from 'react';
const AppContext = createContext();
/**
 * useContext(MyContext) 相当于 class 组件中的 
 * static contextType = MyContext 或者 <MyContext.Consumer>。
 */
class DemoApp extends Component {
  constructor(props) {
    super(props)
    this.toggleTheme = () => {
      this.setState({
        theme: 'blue'
      })
    }
    this.state = {
      theme: 'red',
      toggleTheme: this.toggleTheme
    }
  }
  render() { 
    return (
      <AppContext.Provider value={this.state}>
        <DemoUseContext />
      </AppContext.Provider>
    );
  }
}
function DemoUseContext() {
  const value = useContext(AppContext);
  return (
    <div>
      <h2 style={{color: value.theme}}>theme is {value.theme}</h2>
      <Child1 />
    </div>
  )
}
function Child1() {
  const value = useContext(AppContext);
  return (
    <div>
      <span style={{color: value.theme}}>child com -> theme is {value.theme}</span>
      <button onClick={value.toggleTheme}>toggle theme</button>
    </div>
  )
}

export default DemoApp;
