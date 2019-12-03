import React, { Component } from 'react';
import withLogin from './exampleLogin/withLogin';
import WithLoginButton from './exampleLogin/WithLoginButton';
import WithLoginShoppingCart from './exampleLogin/WithLoginShoppingCart';
// function Button() {
//   return (
//     <button>退出</button>
//   )
// }
// Button.displayName = 'Button';
// function ShoppingCart() {
//   return (
//     <ul>
//       <li>手机</li>
//       <li>平板</li>
//       <li>电脑</li>
//     </ul>
//   )
// }
// ShoppingCart.displayName = 'ShoppingCart';
// const WithLoginButton = withLogin(Button);
// const WithLoginShoppingCart = withLogin(ShoppingCart);
class LoginApp extends Component {
  render() {
    return (
      <div>
        <WithLoginButton a={1}/>
        <WithLoginShoppingCart />
      </div>
    );
  }
}
 
export default LoginApp;