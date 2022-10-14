import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <Link to="/home">首页</Link>
            <Link to="/list">列表</Link>
        </div>
    )
}

export default Menu