import React from 'react';

import './app2.css';
import {Button} from 'antd';
import {CSSTransition} from 'react-transition-group'

export default class App2 extends React.Component {
  state = {show: true};
  onToggle = () => this.setState({show: !this.state.show});
  render() {
    const {show} = this.state;
    return (
      <div className={'container'}>
        <div className={'square-wrapper'}>
          <CSSTransition
              in={show}
              timeout={500}
              classNames={'fade'}
              unmountOnExit={true}
              onEnter={() => console.log('入场开始')}
              onEntering={() => console.log('入场ing')}
              onEntered={() => console.log('入场介绍')}
              onExit={() => console.log('退场开始')}
              onExiting={() => console.log('退场ing')}
              onExited={() => console.log('退场介绍')}
            >
            <div className={'square'} />
          </CSSTransition>
        </div>
        <Button onClick={this.onToggle}>toggle</Button>
      </div>
    )
  }
}