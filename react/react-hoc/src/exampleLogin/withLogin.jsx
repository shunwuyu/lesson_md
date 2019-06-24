import React, { Component } from 'react';

let isLogin = true;
const withLogin = (Com) => {
  class NewComponent extends Component {
    
    render() {
      if (isLogin) {
        return (
          <Com />
        )
      }
      return (
        <button onClick={this.handleLogin}>login</button>
      )
    }
  }
  NewComponent.displayName = `withLogin(${Com.displayName})`
  return NewComponent;
};

export default withLogin;