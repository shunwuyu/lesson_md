import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './touchableOpacity.css';
/**
 * 点击状态组件
 */
class TouchableOpacity extends Component{
  handleTouchStart = () => {
    this.refs.btn.style.opacity = '0.3';
  }
  handleTouchEnd = () => {
    const { onClick } = this.props;
    this.refs.btn.style.opacity = '1';
    onClick();
  }
  
  render() {
    const { className, style, text } = this.props;
    return (
      <div className={`btn ${className}`}  style={ style }
      onTouchStart={this.handleTouchStart} 
      onTouchEnd={this.handleTouchEnd} ref='btn'>
        { this.props.children }
      </div>
    );
  }
}
TouchableOpacity.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
}
TouchableOpacity.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
}
export default TouchableOpacity;