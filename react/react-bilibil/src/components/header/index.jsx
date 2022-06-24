import React from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'
import Logo from "../logo";
import Avatar from "../avatar";
export default function Header() {
  return (
    <Wrapper>
        <Link className="logo" to="/home">
            <Logo />
        </Link>
        <Link className="search-icon" to="/search">
            <i className="fa fa-search"></i>
        </Link>
        <Link className="avatar" to="/space">
            <Avatar/>
        </Link>
    </Wrapper>
  )
}
