import Taro from '@tarojs/taro'
import React from 'react'
import { View, Text, Image } from '@tarojs/components'


export default class PostIndex extends React.Component {
  state = {
    posts: []
  }

  async componentWillMount () {
    // console.log(Taro)
    const response = await Taro.request({
      url: 'http://localhost:3333/posts'
    })

    this.setState({
      posts: response.data
    })

    // console.log(response.data)

  }

  handleClick(id, event) {
    Taro.navigateTo({
      url: `/pages/posts/show?id=${id}`
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {

    return (
      <View className="container">
        {this.state.posts.map((post) => 
          <View className="card" key={post.id} onClick={this.handleClick.bind(this, post.id)}>
            <Image mode="aspectFill" className="card-img-top" src={post.imageUrl} />
            <View className="card-body">
              <View className="card-title">{post.title}</View>
              <View className="card-subtitle">{post.author}</View>
            </View>
          </View> 
        )}
      </View>
    )
  }
}
