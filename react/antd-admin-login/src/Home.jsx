import React from 'react'
import { Layout } from 'antd';
const {  Sider, Content } = Layout;
import Aside from './Aside'

export default function Home() {
  return (
    <Layout style={{minHeight:"100%"}}>
        <Sider>
            <Aside />
        </Sider>
    </Layout>
  )
}
