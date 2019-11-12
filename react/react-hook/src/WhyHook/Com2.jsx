import React, { Component } from 'react';
import useFetchDataHook from './fetchDataHook';

function Com2() {
  const data = useFetchDataHook();
  return (
    <div>
      {!data && 'loading'}
      {
        data && data.code === 200 ?
          data.hotComments.map((comment, i) => {
            return (
              <li key={i}>{comment.content}</li>
            )
          }) : 'error'
      }
    </div>
  );
}

export default Com2;