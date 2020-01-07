import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.css'

export default function PostCard(props) {
  const handleClick = () => {
    if (props.isList) {
      const { title, content } = this.props
      Taro.navigateTo({
        url: `/pages/post/post?title=${title}&content=${content}`,
      })
    }
  }
  return (
    <View className="postcard" onClick={handleClick}>
      <View className="post-title">{props.title}</View>
      <View className="post-content">{props.content}</View>
    </View>
  )
}
