import React, { Component } from 'react';
import './App.css';
export default function (Com) {
  class WithDrag extends Component {
    state = {
      left: 0,
      top: 0
    }
    drag = null;
    handleMove = (e) => {
      var left = e.clientX - this.startX;
      var top = e.clientY - this.startY;
      console.log('l', left, 't', top);
      //控制拖拽物体的范围只能在浏览器视窗内，不允许出现滚动条 
      if (left < 0) {
        left = 0;
      } else if (left > window.innerWidth - this.drag.offsetWidth) {
        left = window.innerWidth - this.drag.offsetWidth;
      }
      if (top < 0) {
        top = 0;
      } else if (top > window.innerHeight - this.drag.offsetHeight) {
        top = window.innerHeight - this.drag.offsetHeight;
      }
      //移动时重新得到物体的距离，解决拖动时出现晃动的现象 
      // this.drag.style.left = left + 'px';
      // this.drag.style.top = top + 'px';
      var clientObj = this.drag.getBoundingClientRect();

      this.setState({
        left: left,
        top: top
      })
    }
    handleDown = (e) => {
      const drag = e.target;
      this.drag = drag;
      var startX = e.clientX; //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离 
      var startY = e.clientY;
      console.log(startX, startY);
      var clientObj = drag.getBoundingClientRect();
      this.startX = startX - clientObj.x;
      this.startY = startY - clientObj.y;
      document.addEventListener('mousemove', this.handleMove);
      document.addEventListener('mouseup', this.handleUp);
    }
    handleUp = () => {
      document.removeEventListener('mousemove', this.handleMove);
    }
    render() {
      const { left, top } = this.state;
      let style = { left, top }
      return (
        <div style={style} className="dragWrap"
          onMouseDown={this.handleDown}
        >
          <Com />
        </div>
      )
    }
  }
  return WithDrag;
}