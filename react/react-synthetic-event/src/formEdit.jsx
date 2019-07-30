import React, { Component } from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    };
  }
  handleClick = () => {
    console.log("edit button click!!");
    this.setState({ editable: true });
  };
  handleSubmit = e => {
    console.log("submit event!!");
    e.preventDefault(); //避免页面刷新
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.editable ? (
          <button type="submit">submit</button>
        ) : (
          // 点击edit按钮的时候就已经触发form的submit事件了。
          // 为什么我们点击了一个type="button"的按钮会触发submit事件呢
          <button type="button" onClick={this.handleClick}>edit</button>
        )}
      </form>
    );
  }
}

export default App;