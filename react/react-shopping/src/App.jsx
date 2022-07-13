import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Shop from './pages/Shop'
import Detail from './pages/Detail'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
const {SubMenu} = Menu
import { MenuUnfoldOutlined } from '@ant-design/icons';
import './App.css'

function App() {
  
  return (
    <div className="App">
      <div className="clear container-main">
        <div className="fl">
          <Menu
            style={{width: 240}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu
              key="sub1" title={<span><MenuUnfoldOutlined /><span>操作</span></span>}>
              <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/about">购物车</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/topics">购买记录</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <Routes>
          <Route path="/" element={<Index/ >} /> 
          <Route path="/shop" element={<Shop/ >} /> 
          <Route path="/detail/:id" element={<Detail/ >} /> 
        </Routes>    
      </div>
      
    </div>
  )
}

export default App
