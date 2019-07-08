import React, { Component } from 'react';
import logo from './logo.svg';
import Count from './Count';
import DemoClassCom from './DemoClassCom';
import DemoHookCom from './DemoHookCom';
import './App.css';

class App extends Component {
  state = { 
    show: true
   }
   handleUnmountDemoClassCom = () => {
     this.setState({
      show: false
     })
   }
  render() { 
    const { show } = this.state;
    return ( 
      <div className="App">
        <Count />
        { show && <DemoClassCom /> }
        <button onClick={this.handleUnmountDemoClassCom}> 
        handleUnmountDemoClassCom
        </button>
        <DemoHookCom />
    </div>
     );
  }
}
 

export default App;
