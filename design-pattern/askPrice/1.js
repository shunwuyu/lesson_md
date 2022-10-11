// 询价方法，接受价格标签和原价为入参
// 单一功能
function askPrice(tag, originPrice) {

    // 处理预热价
    if(tag === 'pre') {
      if(originPrice >= 100) {
        return originPrice - 20
      } 
      return originPrice * 0.9
    }
    
    // 处理大促价
    if(tag === 'onSale') {
      if(originPrice >= 100) {
        return originPrice - 30
      } 
      return originPrice * 0.8
    }
    
    // 处理返场价
    if(tag === 'back') {
      if(originPrice >= 200) {
        return originPrice - 50
      }
      return originPrice
    }
    
    // 处理尝鲜价
    if(tag === 'fresh') {
       return originPrice * 0.5
    }
  }

  console.log(askPrice('back', 201));