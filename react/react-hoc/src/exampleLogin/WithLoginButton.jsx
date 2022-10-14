import React, { Component } from 'react';
import withLogin from './withLogin';

@withLogin
class WithLoginButton extends Component {
  render() { 
    return (
      <div>
        <button>退出</button>
        <button vant="0">collectKey</button>
        <button vant="2">collectKey</button>
      </div>
    )
  }
}
 
export default WithLoginButton;