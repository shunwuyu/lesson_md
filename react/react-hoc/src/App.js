import React, { Component } from 'react';
import ExampleLogin from './ExampleLogin';
import Example1 from './example1/Example';
import log from './exampleLog/index';
import { debounce, decDebounce } from './exampleDebounce/index';
import './App.css';
function test() {
  return function(a, b, c) {
    console.log(a, b, c);
  }
}
@test
class Btn extends Component {
  state = {  }
  @decDebounce(1000)
  handleArrowFunction = () => {
    console.log('2');
  }
  render() {
    console.log(this.handleArrowFunction);
    return (
      <div>
      <button onClick={this.handleClick}>
        123
      </button>
      <button onClick={this.handleArrowFunction}>
        arrow function
      </button>
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <Btn />
      <ExampleLogin />
      <Example1 />
      <button vant="1">collectKey</button>
      <button vant="2">collectKey</button>
    </div>
  );
}

export default App;
