import React from 'react';
import logo from './logo.svg';
import ConcurrentModeCom from './concurrentMode/index.jsx';
import SuspenseCom from './suspense/index';
import './App.css';
// console.log('ConcurrentModeCom', ConcurrentModeCom);
function App() {
  return (
    <div className="App">
      {/* <ConcurrentModeCom /> */}
      <SuspenseCom />
    </div>
  );
}

export default App;
