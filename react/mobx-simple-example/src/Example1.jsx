import { observable } from 'mobx';
import { observer } from 'react-mobx';
import React, { Component } from 'react';

class AppState {
  @observable count = 0;
  increment () {
    this.count ++;
  };
  decrement () {
    this.count --;
  };
}
const appState = new AppState();
@observer
class Count extends Component {
  render() {
    return (<div>
      Counter: { appState.count } <br />
      <button onClick={this.handleInc}> + </button>
      <button onClick={this.handleDec}> - </button>
    </div>);
  }
  handleInc() {
    appState.increment();
  }
  handleDec() {
    appState.decrement();
  }
}

export default Count;