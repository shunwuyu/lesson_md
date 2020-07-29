import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { PostCard, PostForm } from '../../components'

import './index.scss'

export default class Index extends Component {
  // es7 class public 
  // constructor() {
  //   this.state 
  // }
  state = {
    posts: [
      {
        title: '泰罗奥特曼',
        content: '好厉害，别打我'
      }
    ],
    formTitle: '',
    formContent: ''
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  handleContentInput(e) {
    this.setState({
      formContent: e.target.value
    })
  }
  handleTitleInput(e) {
    this.setState({
      formTitle: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    const { formTitle: title, formContent: content} = this.state;
    console.log(this.state);
    const newPosts = this.state.posts.concat({ title, content });
    this.setState({
      posts: newPosts,
      formTitle: '',
      formContent: ''
    })

  }
  render () {
    return (
      <View className='index'>
        {this.state.posts.map((post, index) => (
          <PostCard key={index} title={post.title} content={post.content}/>
        ))}
        <PostForm
          formTitle={this.state.formTitle}
          formContent={this.state.formContent}
          handleSubmit={e => this.handleSubmit(e)}
          handleTitleInput={e=>this.handleTitleInput(e)}
          handleContentInput={e=>this.handleContentInput(e)}
          >
        </PostForm>
      </View>
    )
  }
}
