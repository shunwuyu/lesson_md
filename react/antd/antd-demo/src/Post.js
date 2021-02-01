import React, { Component } from 'react';
import './Post.css'
import { Tabs, Table, Avatar } from 'antd'
const { TabPane } = Tabs

const EnumPostStatus = {
  UNPUBLISH: 1,
  PUBLISHED: 2,
}

export default class Post extends Component {
  constructor() {
    super()
    this.state = {
      status: 1
    }
  }
  handleTabClick = key => {
    console.log(key);
    this.setState({
      status: key
    })
  }
  render() {
    const { status } = this.state
    // const query = 1
    const columns = [
      {
        title: 'Image',
        dataIndex: 'image',
        render: text => <Avatar shape="square" src={text} />,
      },
      {
        title: 'Title',
        dataIndex: 'title'
      },
      {
        title: 'Author',
        dataIndex: 'author',
      },
      {
        title: 'Categories',
        dataIndex: 'categories',
      },
      {
        title: 'Tags',
        dataIndex: 'tags',
      },
      {
        title: 'Visibility',
        dataIndex: 'visibility',
      },
      {
        title: 'Comments',
        dataIndex: 'comments',
      },
      {
        title: 'Views',
        dataIndex: 'views',
      },
      {
        title: 'Date',
        dataIndex: 'date',
      },
    ]

    
    const item = {
      'image': 'https://img.36krcdn.com/20200403/v2_5f37cc54cb3d4deaaabd5ff43f9817ad_img_000',
      'title': '在北京买房，还有机会吗？',
      'author': '未来城不落',
      'categories': 'lgyt',
      'tags': 'html5',
      'visibility': 'Public',
      'comments': 37,
      'views': 12,
      'date': '2010-10-28 11:01:29'
    }
    const data = [];
    for (let i = 0; i < 46; i++) {
      item.id = i + 1;
      data.push(item)
    }
    return (
      <div>
        <Tabs
          activeKey={
            status === String(EnumPostStatus.UNPUBLISH)
            ? String(EnumPostStatus.UNPUBLISH)
            : String(EnumPostStatus.PUBLISHED)
          }
          onTabClick={this.handleTabClick}
        >
          <TabPane
            tab="Published"
            key={String(EnumPostStatus.PUBLISHED)}>
          </TabPane>
          <TabPane
            tab="Unpublished"
            key={String(EnumPostStatus.UNPUBLISH)}>
          </TabPane>
        </Tabs>
        <Table
          bordered
          simple
          dataSource={data}
          columns={columns}
        >

        </Table>
      </div>
    )
  }
}