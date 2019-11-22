import React, {  } from 'react';

import ImmutableComponent from './ImmutableCom';
class Header extends ImmutableComponent {
  state = {  }
  render() { 
    console.log(this.props.header.toJS());
    window.renderCount ++;
    return (
      <ul>
        {
          this.props.header.map((num) => {
            return (
              <li key={num}>{num}</li>
            )
          })
        }
      </ul>
    );
  }
}
 
export default Header;