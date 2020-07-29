// 卖什么？
// vuex 大型应用 
// 物流独立开来？ 京东 2019 
// 武汉仓库， 南昌仓库

// vue 页面  店， 前台 
// 数据驱动 {{ }}
// 仓库  vuex 
// backend :3000/api/products 
// 假数据
const _products = [
  {"id": 1, "title": "iPad4 Mini", "price": 500.01, 
  "inventory":2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, 
  "inventory":10},
  {"id": 3, "title": "Charli XCX -Suker CD", 
  "price": 19.99, 
  "inventory":5},
];
// :8080/  proxyTable
export default {
  // backend  callback
  getProducts(cb) {
    // 模拟ajax过程
    // console.log(cb)
    setTimeout(() => cb(_products)
    , 1000)
    // return new Promise((resolve, reject)=> {

    // })
  }
}