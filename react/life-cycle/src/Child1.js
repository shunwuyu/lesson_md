import React from 'react';

class Child1 extends React.Component {
  state = {
    a: 1
  }
  // 返回数据用于更新 state null表示不更新
  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps', props, state);
    // return {
    //   ...props,
    //   ...state
    // }
    return null;
  }
  // 组件更新前触发
  getSnapshotBeforeUpdate() {
    console.log('getDerivedStateFromProps');
    return 8;
  }
  /**
   * 如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 
   * componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined
   * prevProps, prevState, snapshot
   */
  componentDidUpdate(a, b, c) {
    console.log('componentDidUpdate', a, b, c);
  }
  componentDidMount() {
    console.log('didMount', this.state);
  }
  render() {
    return (
      <p>child1 的内容
        {this.props.count}
      </p>
    )
  }
}
export default Child1;