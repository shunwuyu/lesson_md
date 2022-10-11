import * as React from 'react'

interface IProps {
  /**
   * logo的地址 
   */
  logo?: string
  className?: string
  alt?: string
}

export const Logo = (props:IProps) => {
    const { logo, className, alt } = props

    return (
        <img src={logo} className={className} alt={alt} />
    )
}