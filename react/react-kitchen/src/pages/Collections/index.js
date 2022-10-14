import React from 'react';
// import { NavLink } from "react-router-dom";
import { Card, Tabs, Avatar, Statistic, Icon } from 'antd';
import './index.css';

import {
  AppleOutlined,
  AndroidOutlined
} from '@ant-design/icons';

const TabPane = Tabs.TabPane;
// const { Meta } = Card;

export default class Collections extends React.Component {
  state = {
    menuList: []
  }
  componentWillMount() {
    this.getCollectionList()
  }
  getCollectionList = () => {
    
  }
  render() {
    return (
      <div className="wrap">
        <div className="user-header">
          <Avatar
            className="avatar"
            style={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
              width: 100,
              height: 100
            }}
          >
            U
          </Avatar>
          <div className="info">
            <h1>小榕同学的厨房</h1>
            <div className="statistic">
              <Statistic
                className="statistic-item"
                title="我的点赞"
                value={101}
              />
              <Statistic
                className="statistic-item"
                title="我的关注"
                value={11}
              />
            </div>
          </div>
        </div>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <AppleOutlined/>
                我的收藏
              </span>
            }
            key="1"
          >
            <div className="collection-content">
              {this.state.menuList}
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                我的点赞
              </span>
            }
            key="2"
          />
        </Tabs>
      </div>
    )
  }
}