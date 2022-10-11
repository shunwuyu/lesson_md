import React from 'react';
import { Tag } from 'antd';
import { NavLink } from "react-router-dom";
import axios from 'axios'

import './index.less'
export default class NavRight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tagList: []
    }
  }

  componentDidMount(){
    this.getTagAPIList()
  }

  renderTagList(data){
    return data.map((item, index) => {
      return (
        <li className="tags-content" key={index}>
          <h4>{item.name}</h4>
          <div>
            {item.list.map((tag, index) => (
                <Tag color="magenta" key={index}>{tag.name}</Tag>
            ))}
          </div>
        </li>
      )
    })
  }


  getTagAPIList () {
    axios
      .get('/recipe')
      .then(res => {
        if (res.data.recipes.status === 0) {
          let tagList = this.renderTagList(res.data.recipes.result)
          this.setState({
            tagList: tagList
          })
        }
        console.log(res)
      })
      // .then((res) => {
      //   console.log(res)
      //   // if (res.status === 0) {
      //   //   let tagList = this.renderTagList(res.result)
      //   //   this.setState({
      //   //     tagList: tagList
      //   //   })
      //   // }
      // })
  }

  render() {
    return (
      <div className="aside">
        <h3 className="title">
          <span className="hot-tag">热门标签</span>
          <span className="link-more">
            <NavLink to="/tags" >更多</NavLink>
          </span>
        </h3>
        <ul className="tags">
          {this.state.tagList}
        </ul>
      </div>
    )
  }
}