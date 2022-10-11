import React, { Component } from 'react';
class App extends React.Component {
  innerClick = e => {
    console.log("A: react inner click.");
    // e.stopPropagation();
  };

  outerClick = () => {
    console.log("B: react outer click.");
  };

  componentDidMount() {
    document
      .getElementById("outer")
      .addEventListener("click", () => console.log("C: native outer click"));

    window.addEventListener("click", () =>
      console.log("D: native window click")
    );
  }

  /**
   * CABD
   * 因为React事件监听是挂载在document上的，
   * 所以原生系统在#outer上监听的回调C会最先被输出；
   * 接着原生事件冒泡至document进入React事件系统，React事件系统模拟捕获冒泡输出A和B；
   * 最后React事件系统执行完毕回到浏览器继续冒泡到window，输出D。
      浏览器在#outer上监听原生事件的回调C会最先被执行；
      接着原生事件冒泡至document进入React事件系统，
      输出A，在React事件处理中#inner调用了stopPropagation，
      事件被停止冒泡。
      最好不要混用React事件系统和原生事件系统，如果混用了，请保证你清楚知道会发生什么。
   * e.stopPropagation() CA
   */

  render() {
    return (
      <div id="outer" onClick={this.outerClick}>
        <button id="inner" onClick={this.innerClick}>
          BUTTON
        </button>
      </div>
    );
  }
}

export default App;