import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, TabItem } from './style';

const Menu = () => {
    return (
        <>
            <Tab>
                <Link to="/recommend"><TabItem><span > 推荐 </span></TabItem></Link>
                <Link to="/singers"><TabItem><span > 歌手 </span></TabItem></Link>
                <Link to="/rank"><TabItem><span > 排行榜 </span></TabItem></Link>
            </Tab>
        </>
    )
}

export default Menu