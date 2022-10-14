import React from 'react';
import { Layout } from 'antd';
import '../assets/style/layout.css'
const {  Content } = Layout;
export default function Frame(props) {
  return (<div>
    <Layout className="layout">
      <Layout>
        <Content className="content">
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </div>)
}