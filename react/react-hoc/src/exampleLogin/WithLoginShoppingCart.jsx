import React, { Component } from 'react';
import withLogin from './withLogin';

@withLogin
class WithLoginShoppingCart extends Component {
  state = {  }
  render() { 
    return (
          <ul>
            <li>手机</li>
            <li>平板</li>
            <li>电脑</li>
          </ul>
        )
  }
}
 
export default WithLoginShoppingCart;