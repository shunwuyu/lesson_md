import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  }))
}



// Mock.mock('/api/orders', 'post', dataList)
Mock.mock(new RegExp('/vue-element-admin/article/list'), 'get', (config) => {
  // console.log(config);
  const { page=1, limit=20, title, type,sort } = param2Obj(config.url)
  // console.log(queryObj);
  console.log(config);
  let mockList = List.filter(item => {
    if (type && item.type !== type) return false
    if (title && item.title.indexOf(title) < 0) return false
    return true
  });

  if (sort === '-id') {
    mockList = mockList.reverse()
  }

  console.log(mockList);
  const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
  
  return {
    total: mockList.length,
    items: pageList
  }
})

export default Mock;