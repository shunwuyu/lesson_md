import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './FooterNav.css';

function FooterNav(props) {
    // 路由地址匹配，如果包含以下地址的组件，那么底部导航栏不展示
    let pathName  = props.location.pathname,
        flag = /(DETAIL|PAY|CART|SEARCH|LOGIN|REGISTER|ORDER)/i.test(pathName);
    return <>
        {flag ? null : <div className='FooterNavBox'>
            <NavLink to='/' exact>
                <i className='icon'></i>
                <span>首页</span>
            </NavLink>
            <NavLink to='/category' >
                <i className='icon'></i>
                <span>分类</span>
            </NavLink>
            <NavLink to='/pinwei' >
                <i className='icon'></i>
                <span>品味</span>
            </NavLink>
            <NavLink to='/cart' >
                <i className='icon'></i>
                <span>购物车</span>
            </NavLink>
            <NavLink to='/personal' >
                <i className='icon'></i>
                <span>个人中心</span>
            </NavLink>
        </div>}
    </>
}

export default withRouter(FooterNav);