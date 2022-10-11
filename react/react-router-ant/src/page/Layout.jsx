import React from 'react';
import {
  Layout, Row, Col, Avatar, Input,
  Menu, Dropdown, Icon, Badge
} from 'antd';
import { Link } from 'react-router-dom';
import {
  Route
} from "react-router-dom";
function TableLi() {
  return (
    <div>TableLi1</div>
  )
}
function TableLi2() {
  return (
    <div>TableLi2</div>
  )
}
function Table(props) {
  console.log(props);
  return (
    <ul>
      Table
      <span>
        <Link to="/table/li1">li1</Link>
      </span>
      <span>
        <Link to="/table/li2">li2</Link>
      </span>
      <div>
        <Route path="/table/li1" component={TableLi} />
        <Route path="/table/li2" component={TableLi2} />
      </div>
    </ul>
  )
}
function Label() {
  return (
    <div>Label</div>
  )
}
const { Header, Footer, Sider, Content } = Layout;
function DropMenu() {
  return (
    <Menu>
      <Menu.Item>
        <a href="">1</a>
      </Menu.Item>
      <Menu.Item>
        <a href="">2</a>
      </Menu.Item>
    </Menu>
  )
}
class PageLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
          <Row>
            <Col span={10}>
              React + Antd 实践
            </Col>
            <Col span={8}>
              <Input placeholder="请输入你想要的......"></Input>
            </Col>
            <Col span={6}>
              <Avatar style={{ backgroundColor: '#666', marginRight: 20 }}
                icon="user"
              ></Avatar>
              <Dropdown overlay={DropMenu}>
                <span>Hi,
                  <Icon type="down"></Icon>
                </span>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider>
            <Menu
              style={{ width: 256, height: '90vh', overflow: 'auto', minWidth: 256 }}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <Menu.SubMenu key="sub1" title={
                <span><Icon type="smile-0"></Icon>部分ui组件实战</span>
              }>
                <Menu.Item key="sub1-1">
                  {/* /table */}
                  <Link to={{
                    pathname: "/table",
                    search: "?id=1",
                  }}>表格</Link>
                </Menu.Item>
                <Menu.Item key="sub1-2">
                  {/* /table */}
                  <Link to="/label">标签页面</Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Content style={{ marginLeft: '5%' }}>
            <Route path="/table" component={Table} />
            <Route path="/label" component={Label} />
          </Content>
        </Layout>
        <Footer>
          Footer
        </Footer>
      </Layout>
    )
  }
}
export default PageLayout;