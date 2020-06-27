import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { 
    checked: false
   }
  handle = (e) => {
    console.log(e.target.checked)
    let checked = e.target.checked;
    this.setState({
      checked
    })
  }
  render() { 
    const { checked } = this.state;
    return (
      <div>
        <input type="checkbox"
        checked={checked} name="" id=""
        onChange={this.handle}
        />
      </div>
    );
  }
}
 

export default App;
