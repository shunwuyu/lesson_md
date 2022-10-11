import React,{useState} from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { HeaderWrapper } from './style'
import { useParams } from 'react-router-dom'
const Header = () => {
    const [search] = useSearchParams();
    let nm = search.get('nm') || ''
    return (
        <HeaderWrapper>
            <Link 
                className = "citygps"
                to="/cities"  
                key="cities"
            >
                <i className = "fa fa-map-marker"></i>
                <span>
                    {nm?nm:'获取城市坐标'}
                </span>
                <i className = "fa fa-sort-desc"></i>
            </Link>
            <div className = "header_search">
                <input type="text" placeholder = "搜索商家、商品"/>
            </div>
        </HeaderWrapper>
    )
}

export default Header