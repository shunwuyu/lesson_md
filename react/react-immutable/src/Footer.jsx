import React, { Component } from 'react';
import ImmutableComponent from './ImmutableCom';
class Footer extends ImmutableComponent {
  state = {  }
  render() {
    window.renderCount ++;
    return (
      <div>
        { this.props.footer.get('auth') }
      </div>
    );
  }
}
 
export default Footer;