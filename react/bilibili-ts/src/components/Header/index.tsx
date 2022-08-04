import React from 'react'
import { HeaderWrapper } from './style'
import { Link } from 'react-router-dom'
import Logo from "@/components/Logo";
import Avatar from "@/components/Avatar";
export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/" className="logo">
        <Logo />
      </Link><Link to="/space" className="avatar">
        <Avatar />  
      </Link><Link to="/search" className="search-icon">
        <i className="icon-search" />
      </Link>
    </HeaderWrapper>
  )
}
