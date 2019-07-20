import React, { Component } from 'react';
import logo from './logo.svg';
import Count from './Count';
import DemoClassCom from './DemoClassCom';
import DemoHookCom from './DemoHookCom';
import DemoUseReducer from './DemoUseReducer';
import DemoUseContext from './DemoUseContext';
import Com1 from './WhyHook/Com1';
import Com2 from './WhyHook/Com2';
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
        <br/>
        <DemoUseReducer initialCount={0}/>
        <br/>
        <DemoUseContext />
        这是 com1:
        <Com1 />
        这是 com2:
        <Com2 />
    </div>
     );
  }
}
 

export default App;
