import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'

export default class PostShow extends Component {
  state = {
    post: {}
  }

  async componentWillMount () { 
    // console.log(this.params);
    const tid = this.props.tid.split('=')[1];
    const response = await Taro.request({
      url:'http://localhost:3333/posts/' + tid
    })

    this.setState({
      post: response.data
    })

    Taro.setNavigationBarTitle({
      title: response.data.title
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const post = this.state.post
    return (
      <View>
        <Image mode="aspectFill" className="card-img-top" src={post.imageUrl} />
        <View className="card-body no-border">
          <View className="card-title">{post.title}</View>
          <View className="card-subtitle">{post.author}</View>
          <View className="card-text">{post.description}</View>
        </View>
      </View>
    )
  }
}
