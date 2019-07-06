import React, { Component } from 'react';
import logo from './logo.svg';
import toast from './toast/toast';
import './App.css';

class App extends Component {
  state = {  }
  handleToast = (e) => {
    const type = e.target.dataset.type;
    if (toast[type]) {
      toast[type]('123');
    }
  }
  handleToastAndClose = () => {
    const closeFun = toast['loading']('123');
    setTimeout(() => {
      console.log('close function');
      closeFun();
    }, 3000);
  }
  render() { 
    return (
      <div>
        <button onClick={this.handleToast} data-type="info">info</button>
        <button onClick={this.handleToast} data-type="success">success</button>
        <button onClick={this.handleToast} data-type="warning">warning</button>
        <button onClick={this.handleToast} data-type="error">error</button>
        <button onClick={this.handleToastAndClose} data-type="loading">loading</button>
      </div>
    );
  }
}
 
export default App;
