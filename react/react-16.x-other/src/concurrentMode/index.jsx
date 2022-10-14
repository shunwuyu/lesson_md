import React from 'react';
// React.unstable_ConcurrentMode 整个应用在该组件下面，都是以低优先级的方式渲染
// flushSync 强制执行某个方法时候 以优先级最高的方式更新
import { flushSync } from 'react-dom';
import './index.css';

class Parent extends React.Component {
  state = {
    async: true,
    num: 1,
    length: 2000,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateNum()
    }, 100)
  }

  componentWillUnmount() {
    // 别忘了清除interval
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  updateNum() {
    const newNum = this.state.num === 5 ? 0 : this.state.num + 1
    // true 低优先级 动画优先
    if (this.state.async) {
      this.setState({
        num: newNum,
      })
    } else {
      // setState 最高优先级
      flushSync(() => {
        this.setState({
          num: newNum,
        })
      })
    }
  }

  render() {
    const children = []

    const { length, num, async } = this.state

    for (let i = 0; i < length; i++) {
      children.push(
        <div className="item" key={i}>
          {num}
        </div>,
      )
    }

    return (
      <div className="main">
        async:{' '}
        <input
          type="checkbox"
          checked={async}
          onChange={() => flushSync(() => this.setState({ async: !async }))}
        />
        <div className="wrapper">{children}</div>
      </div>
    )
  }
}

class IndexApp extends React.Component {
  render() {
    return (
      <React.unstable_ConcurrentMode>
        <Parent />
     </React.unstable_ConcurrentMode>
    )
  }
}
 
export default IndexApp;
