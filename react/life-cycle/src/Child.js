import React from 'react';

class Child extends React.Component {
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.timer = setInterval(() => {
      console.log('child1 setInterval');
    }, 1000);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timer);
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate(nextprops, nextState) {
    console.log('shouldComponentUpdate', nextprops, nextState);
    return true;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    const { msg } = this.props;
    return (
      <p>child
        { msg }
      </p>
    )
  }
}
export default Child;