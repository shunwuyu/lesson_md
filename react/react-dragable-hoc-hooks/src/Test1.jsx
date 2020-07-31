import React, { Component } from 'react';
import withDrag from './withDrag';
class Test1 extends Component {
  render() {
    return (
      <h2>
        h2
      </h2>
    )
  }
}

export default withDrag(Test1);