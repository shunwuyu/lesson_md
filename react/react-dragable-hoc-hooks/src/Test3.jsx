import React, { Component } from 'react';
import useDrag from './useDrag.jsx';

export default function Test3() {
  const { style, handleDown } = useDrag();
  return (
    <div style={style} onMouseDown={handleDown} 
    className="test3">
      this is test 3 by hooks
    </div>
  )
}