import React, { Component } from 'react';
import withDrag from './withDrag';

class Test2 extends Component {
  state = {  }
  render() { 
    return (
      <div>
        box
      </div>
    );
  }
}
 
export default withDrag(Test2);