import Mock from 'mockjs'
const Random = Mock.Random

const total = 100;
// const dataList={ 
//   'orders|100': [{
//     "id|+1": 1,
//     "name": "@cname",
//   }]
// };


const dataList = [] 

for (let i = 0; i < total; i++) {
  const template = {
    "_id": i+1,
    "name": Random.name(),
    "orderDate": Random.date(),
    "status": Random.integer(-1,1), //
    // "shoppingFee": Random.float(0,8,0,2),//小数点2位
    // "total": Random.float(10, 100, 0, 2)
  }
  dataList.push(template)
}

// Mock.mock('/api/orders', 'post', dataList)
Mock.mock('/api/orders', 'get', (params) => {
  console.log(params)
  var info = JSON.parse(params.body)
  // console.log(dataList);
  var [page, limit ] = [info.params.page, info.params.limit];
  // console.log(page, limit);
  var len = total / limit; //页面数量
  // console.log(len);
  var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
  // console.log(totalPages);
  // console.log(dataList);
  var newDataList = dataList.slice((page-1)* limit, (page)* limit)
  console.log(newDataList)
  return {
    'code': '0',
    'message': 'success',
    
    page,
    total,
    result: newDataList,
    totalPages
    
  }
})

export default Mock;
