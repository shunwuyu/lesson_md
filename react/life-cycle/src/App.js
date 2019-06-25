import React from 'react';
import oldLifeCycle from './old.png';
import Child from './Child';
import Child1 from './Child1';
import './App.css';
class App extends React.Component {
  state = {
    msg: 'old msg',
    flag: true,
    name: 'old child1 name',
    count: 0,
  }
  handleToggle = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        msg: 'new msg'
      })
    }, 3000);
  }
  handleUpdateChild1 = () => {
    let { count } = this.state;
    count ++;
    this.setState({
      name: 'new name',
      count
    })
  }
  render() {
    const { msg, flag, name, count } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={oldLifeCycle} className="App-logo" alt="logo" />
        </header>
        <button onClick={this.handleToggle}>切换组件</button>
        <button onClick={this.handleUpdateChild1}>更新chuild1数据</button>
        {
          flag ?
          <Child msg={msg}/> :
          <Child1 name={name} count={count} />
        }
        
      </div>
    );
  }
}

export default App;
