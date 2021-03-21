import React from 'react';
import { Input, Menu, Avatar, Divider, Icon, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.less'
import { SearchOutlined } from '@ant-design/icons';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  
  getInputValue (event) {
    let value = event.target.value;
    this.setState({
      value
    });
  };

  menuSearch () {
    let value = this.state.value;
    // this.props.transmit(value)
  };

  render() {
    return (
      <div className="container">
        <div className="topbar-container">
          <div className="logo">
            <NavLink to="/home">
              <span>小帮厨</span>
            </NavLink>
          </div>
          <Input
            style={{ width: '22%' }}
            placeholder="搜索菜谱、食材"
            onChange={event => this.getInputValue(event)}
            allowClear
            size="large"
          />
          <NavLink to="/search">
            <Button
              type="primary"
              size="large"
              onClick={this.menuSearch}
              icon={<SearchOutlined />}
            >
              搜菜谱
            </Button>
          </NavLink>
          <div className="topbar-menu">
            <Menu mode="horizontal">
              <SubMenu
                title={<span className="submenu-title-wrapper">菜谱分类</span>}
              >
                <MenuItemGroup title="常用主题" />
                <MenuItemGroup title="常见食材" />
                <MenuItemGroup title="时令食材" />
              </SubMenu>
              <Menu.Item key="alipay">
                <NavLink to="/topic">话题</NavLink>
                </Menu.Item>
              <Menu.Item key="mail"><NavLink to="/menu">菜单</NavLink></Menu.Item>
              <Menu.Item key="app"><NavLink to="/collections">我的主页</NavLink></Menu.Item>
            </Menu>
          </div>
          <div className="avatar">
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
              U
            </Avatar>
            <Divider type="vertical" />
          </div>
        </div>
      </div>
    )
  }
}

export default Header