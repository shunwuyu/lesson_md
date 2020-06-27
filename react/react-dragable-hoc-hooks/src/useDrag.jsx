import React, { useState } from 'react';

export default function useDrag() {
  const [style, setStyle] = useState({
    left: 0,
    top: 0
  })
  let startX = 0, startY = 0;
  let drag = null;
  const handleMove = (e) => {
    var left = e.clientX - startX;
    var top = e.clientY - startY;
    console.log('l', left, 't', top);
    //控制拖拽物体的范围只能在浏览器视窗内，不允许出现滚动条 
    if (left < 0) {
      left = 0;
    } else if (left > window.innerWidth - drag.offsetWidth) {
      left = window.innerWidth - drag.offsetWidth;
    }
    if (top < 0) {
      top = 0;
    } else if (top > window.innerHeight - drag.offsetHeight) {
      top = window.innerHeight - drag.offsetHeight;
    }
    //移动时重新得到物体的距离，解决拖动时出现晃动的现象 
    // drag.style.left = left + 'px';
    // drag.style.top = top + 'px';
    var clientObj = drag.getBoundingClientRect();

    setStyle({
      left: left,
      top: top
    })
  }
  const handleUp = () => {
    document.removeEventListener('mousemove', handleMove);
  }
  const handleDown = (e) => {
    drag = e.target;
    startX = e.clientX;
    startY = e.clientY;
    var clientObj = drag.getBoundingClientRect();
    startX = startX - clientObj.x;
    startY = startY - clientObj.y;
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
  }
  return {
    style,
    handleDown
  };
}