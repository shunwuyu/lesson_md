import React, { Component } from 'react';
import withLogin from './withLogin';

@withLogin
class WithLoginButton extends Component {
  render() { 
    return (
          <button>退出</button>
    )
  }
}
 
export default WithLoginButton;