import React, { useEffect, useState } from 'react';
import axios from 'axios';
import spinner from './ajax-loader.gif';
import { Table, Avatar } from 'antd';
const INFO_API_URL = 'articles'


const columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key'
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: '作者',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex'
  },
  {
    title: 'ZIP',
    dataIndex: 'zip',
    key: 'zip'
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
    render: avatar => <Avatar src={avatar}/>
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
]

const HookInfo = () => {
  const [loading, setLoading] = useState(true)
  const [infos, setInfos] = useState([])
  useEffect(() => {
    // console.log('---------------')
    setTimeout(() => {
      axios.get(INFO_API_URL)
      .then(res => {
        // console.log(res.data);
        setInfos(res.data.data);
        setLoading(false)
      })
    }, 2000)
  }, [])
  console.log(infos, '+++++++++++++++');
  return(
    <div>
      { loading? (
        <img className="spinner" src={spinner} alt='Loadding spinner'/>
      ):( 
        <Table columns={columns} dataSource={infos} />
      )}
      
    </div>
  )
}

export default HookInfo;
