import React, { Component } from 'react';
import Hooks from './fetchDataHook';
class Com1 extends Component {
  state = {  }
  render() { 
    // const data = Hooks();
    return (
      <div>
        <Hooks />
        {/* { !data && 'loading' }
        {
          data.code === 200 ?
          data.hotComments.map(comment => {
            return (
              <li>{ comment.content }</li>
            )
          }) : 'error'
        } */}
      </div>
    );
  }
}
 
export default Com1;