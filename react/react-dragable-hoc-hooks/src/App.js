import React, { ConcurrentMode } from 'react';
import logo from './logo.svg';
import './App.css';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
console.log('ConcurrentMode',
  React.ConcurrentMode,
  ConcurrentMode,
  React.unstable_ConcurrentMode,
  React.unstable_ConcurrentMode
)
class App extends React.Component {
  render() {
    return (
      <div>
        <Test1 />
        <Test2 />
        <Test3 />
      </div>
    )
  }
}

export default App;
