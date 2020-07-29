import React from 'react';
import logo from './logo.svg';
import './App.css';
import useTitle from './useTitle.js';
import { Link, Route } from 'react-router-dom';
import About from './About.js'
function App() {
  useTitle('首页');
  return (
    <div className="App">
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
          <Link to="about">About</Link>
        </a>
        <Route path='/about' render={About}/>
      </header>
    </div>
  );
}

export default App;
