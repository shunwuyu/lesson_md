import React, { Component } from 'react';
import ImmutableComponent from './ImmutableCom';
class Main extends ImmutableComponent {
  state = {  }
  render() { 
    window.renderCount ++;
    return (
      <div>
      {
        this.props.main.get('topic')
        .map((dis, i) => {
          return (
            <p key={i}>
              { dis.get('content') }
            </p>
          )
        })
      }
      </div>
    );
  }
}
 
export default Main;