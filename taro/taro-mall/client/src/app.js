import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from './store'
import Index from './pages/index'

import './app.scss'

const store = configStore()
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/cart/cart'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ffffff',
      navigationBarTitleText: 'TARO商城',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#7b7b7a',
      selectedColor: '#c0a369',
      backgroundColor: '#222222',
      list: [
        {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'asset/home.png',
        selectedIconPath: 'asset/home_active.png'
      },{
        pagePath: 'pages/cart/cart',
        text: '购物车',
        iconPath: 'asset/shoppingbag.png',
        selectedIconPath: 'asset/shoppingbag_active.png'
      }]
    },
    networkTimeout: {
      request: 6000,
      connectSocket: 10000,
      uploadFile: 10000,
      downloadFile: 10000
    },
    cloud: true
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
