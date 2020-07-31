import React, { useState } from 'react';
import RenderProps from './RenderPropsCom';
import BetterByHook from './Width';
import PropsProxy from './PropsProxy';

function App() {
  const [flag, changeFlag] = useState(true)
  return (
    <div className="">
      <RenderProps />
      <BetterByHook />
      <button onClick={() => {
        changeFlag(false)
      }}> changeFlag </button>
      {
        flag ?
        <PropsProxy /> : null
      }
      
    </div>
  );
}

export default App;
