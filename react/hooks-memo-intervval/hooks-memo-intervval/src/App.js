import React from 'react';
import logo from './logo.svg';
import './App.css';
import Memo from './Memo-callback';
import Interval from './interVal';
import LastProps from './lastProps';
import SetinterVal from './setInterval';
function App() {
  return (
    <div className="App">
      <SetinterVal />
      <LastProps />
      {/* <Interval /> */}
      <Memo />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
