import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;

class Form extends Component {

  handeChange (value) {
    this.props.searchItem(value)
  }

  render () {
    return (
      <Search
        placeholder="请输入搜索内容"
        style={{marginBottom: '8px'}}
        onSearch={value => this.handeChange(value)}
        enterButton
      />
    )
  }
}

export default Form;