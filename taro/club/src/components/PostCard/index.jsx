import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

// taro 世界 -》 支付宝小程序， + 快应用+ app 
// Taro   react
// View ?  打包成不同平台的View 
import './index.scss'
export default function PostCard(props) {
  return (
    <View className="postcard">
      <View className="post-title">
        {props.title}
      </View>
      <View className="post-content">
        {props.content}
      </View>
    </View>
  )
}