import React, { Component } from 'react';
function WithCom(Com){
  return class extends Component {
    componentDidMount() {
      console.log('hoc DidMount');
    }
    componentWillUnmount() {
      console.log('hoc componentWillUnmount');
    }
    render() {
      return (<Com />);
    }
  }
}
class A extends Component {
  state = {  }
  componentDidMount() {
    console.log('A com DidMount');
  }
  componentWillUnmount() {
    console.log('A com componentWillUnmount');
  }
  render() {
    return (
      'A com'
    );
  }
}
export default WithCom(A);