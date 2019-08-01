import React, { Component } from 'react';
const ref = React.createRef();
class Demo extends Component {
  handleClick = () => {
    console.log(1);
  }
  handleNativeClick = () => {
    console.log(2);
  }
  componentDidMount() {
    ref.current.addEventListener('click', this.handleNativeClick);
  }
  render() { 
    return (
      <div>
        <h1 onClick={this.handleClick}>react</h1>
        <h1 ref={ref}> native</h1>
      </div>
    );
  }
}
 
export default Demo;