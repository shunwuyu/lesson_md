import React, { useEffect, useContext } from 'react';
import Buttons from './Buttons';
import { Color } from './Color'
import ShowArea from './ShowArea'
const Example6 = () => {
  useEffect(() => {
    console.log('didMount 或 didUpdate');
    return () => {
      console.log('willMount');
    }
  }, [])
  return (
    <Color>
      <Buttons useContext={useContext} />
      <ShowArea useContext={useContext}/>
    </Color>
  )
}

export default Example6;
