import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import SearchInto from '../../components/search/searchInto'
import Login from '../../components/login/index'

class Index extends Component {

  config = {
    navigationBarTitleText: 'TARO商城',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark',
    disableScroll: true
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='index-search_into'>
          <SearchInto placeholder='搜索框' type='index' />
        </View>
        <ScrollView
          scrollY
          className='index_list'>
          {

          }
        </ScrollView>
      </View>
    )
  }
}

export default connect(({home}) => ({
  homeData: home
}))(Index)
