import React from 'react'
import { ColorContext } from './Color'

const showArea = props => {
  const { color } = props.useContext(ColorContext)
  return (
    <div style={{color: color}}>水果果仁麦片</div>
  )
}

export default showArea