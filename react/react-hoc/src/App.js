import React, { Component } from 'react';
import ExampleLogin from './ExampleLogin';
import Example1 from './example1/Example';
import log from './exampleLog/index';
import { debounce, decDebounce } from './exampleDebounce/index';
import './App.css';

class Btn extends Component {
  state = {  }

  // @decDebounce(10000)
  handleClick = debounce((e) => {
    console.log(1, e);
  }, 1000)
  // @decDebounce(1000)
  // handleClick() {
  //   console.log('1');
  // }
  // @decDebounce(1000)
  // handleClick = () => {
  //   console.log('1');
  // }
  render() { 
    return (
      <button onClick={this.handleClick}>
        123
      </button>
    );
  }
}
function App() {
  return (
    <div className="App">
      <Btn />
      <ExampleLogin />
      <Example1 />
    </div>
  );
}

export default App;
