import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';

class AppState {
  @observable count = 0;
  @observable a = 0
  increment () {
    this.a --;
    this.count ++;
  };
  decrement () {
    this.count --;
  };
}
const appState = new AppState();
autorun(() => {
  // console.log(appState.count);
})
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