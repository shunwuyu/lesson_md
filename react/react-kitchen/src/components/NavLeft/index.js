import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import MenuConfig from '../../config/menuConfig';
import Item from 'antd/lib/list/Item';
const SubMenu = Menu.SubMenu;
const NavLeft = (props) => {
  // 递归调用
  const renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title}
          key={item.key}>
            {renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
      <NavLink to={item.key}>{item.title}</NavLink>
    </Menu.Item>
    })
    

    
  }
  const menuTreeNode = renderMenu(MenuConfig);
  return (
    <>
      <Menu>
      {menuTreeNode}
      </Menu>
    </>
  )
}
export default NavLeft 