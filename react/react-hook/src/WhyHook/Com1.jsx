import React, { Component } from 'react';
import useFetchDataHook from './fetchDataHook';

function Com1() {
  const data = useFetchDataHook();
  console.log('data', data);
  return (
    <div>
      {!data && 'loading'}
      {
        (data && data.code === 200) ?
          data.hotComments.map((comment, i) => {
            return (
              <li key={i}>{comment.content}</li>
            )
          }) : 'error'
      }
    </div>
  );
}

export default Com1;