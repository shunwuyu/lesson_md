import React, { Component } from 'react';
import { Layout } from 'antd';
import datas from './data';
import './todolist.css';
import Footer from './components/Footer';
import DataList from './components/DataList';
import Form from './components/Form';

const { Header, Content} = Layout;


class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    this.setState({
      list: datas
    })
  }

  handleSearchItem(value) {
    let newList = datas.filter(item => {
      return item.content.indexOf(value) !== -1
    })
    this.setState({
      list: newList
    })
  }

  deleteItem (id) {
    let deleteIndex = datas.findIndex(item => {
      return item.id === id
    })
    datas.splice(deleteIndex, 1)
    this.setState({
      list: datas
    })
  }

  changeItem(id) {
    let changeIndex = datas.findIndex(item => {
      return item.id === id
    })
    datas[changeIndex].isComplete = !datas[changeIndex].isComplete
    this.setState({
      list: datas
    })
  }

  addItem (item) {
    datas.push(item)
    this.setState({
      list: datas
    })
  }

  render () {
    return (
      <Layout className="todolist-layout">
        <Header>
          <h3 className="logo">TodoList</h3>
        </Header>
        <Content className="todolist-content">
          <Form searchItem={value => this.handleSearchItem(value)}></Form>
          <DataList list={this.state.list} deleteItem={id => this.deleteItem(id)} changeItem={id => this.changeItem(id)}></DataList>
          <Footer addItem={item => this.addItem(item)}></Footer>
        </Content>
      </Layout>
    )
  }


}

export default TodoList;