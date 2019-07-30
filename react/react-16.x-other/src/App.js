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
var a = {};
var b = Object.prototype
console.log(a.prototype === b);
console.log(a.__proto__ === b);
console.log(Object.getPrototypeOf(a) === b);

export default App;
