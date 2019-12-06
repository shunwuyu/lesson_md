import React, { Component, PureComponent } from 'react';
class PureDemo extends PureComponent {
  state = { 
    // arr: [0, 1]
    el: 'app'
  }
  addEle = () => {
    // let { arr } = this.state;
    // arr.push(3);
    this.setState({
      el: 'app'
    })
  }
  render() { 
    console.log('update');
    let { arr, el } = this.state;
    return (
      <ul>
        {el}
        <button onClick={this.addEle}>addEle</button>
        {
          arr && arr.map((el, i) => {
            return (
              <li key={i}>
                {el}
              </li>
            )
          })
        }
      </ul>
    );
  }
}
 
export default PureDemo;