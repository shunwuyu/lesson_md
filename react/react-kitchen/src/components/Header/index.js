import React, { useState } from 'react';
import { Input, Button, Icon, Avatar, Menu, Divider } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.css';
const { SubMenu } = Menu;

const Header = (props) => {
  return (
    <div className="container">
      <div className="topbar-container">
        <div className="logo">
          <NavLink to="/home">
            <span>小帮厨</span>
          </NavLink>
        </div>
        <Input 
          style={{width: '20%'}}
          placeholder="搜索食谱、食材"
          size="large"
          allowClear/>
        <NavLink to="/search">
          <Button 
            type="primary" 
            size="large">
            搜菜谱
          </Button>
        </NavLink>
        <div className="topbar-menu">
          <Menu mode="horizontal">
            <SubMenu
              key="SubMenu" title="菜谱分类">
              <Menu.Item title="常用主题"/>
              <Menu.Item title="常见食材"/>
              <Menu.Item title="时令食材"/>
            </SubMenu>
            <Menu.Item key="alipay">
              <NavLink to="/topic">
              话题
              </NavLink>
            </Menu.Item>
            <Menu.Item key="mail">
              <NavLink to="/menu">
              菜单
              </NavLink>
            </Menu.Item>
            <Menu.Item key="app">
              <NavLink to="/collections">
              我的主页
              </NavLink>
            </Menu.Item>
          </Menu>
        </div>
        <div className="avatar">
          <Avatar style={{color:'#f56a00', backgroundColor:'#fde3cf'}}>U</Avatar>
          <Divider type="vertial" />
        </div>
      </div>
    </div>
  )
}

export default Header;