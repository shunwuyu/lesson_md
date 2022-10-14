const products = [
    {id:1, v: 60, w: 10}, 
    {id:2, v: 100, w: 20}, 
    {id:3, v: 120, w: 30}
  ];    // 新建一个数组表示商品列表，每个商品加个id用于标识
  
function backpack(W, products) {
    const sortedProducts = products.sort((product1, product2) => {
        const price1 = product1.v / product1.w;
        const price2 = product2.v / product2.w;
        if(price1 > price2) {
            return -1;
        } else if(price1 < price2) {
            return 1;
        }
        return 0;
    });  // 先对商品按照价值从大到小排序

    const result = []; // 新建数组接收结果
    let allValue = 0;  // 拿到的总价值
    const length = sortedProducts.length;

    for(let i = 0; i < length; i++) {
        const sortedProduct = sortedProducts[i];
        if(W >= sortedProduct.w) {
        // 整个拿完
            result.push({
                id: sortedProduct.id,
                take: 1,     // 拿的数量
            });
            W = W - sortedProduct.w;
            allValue = allValue + sortedProduct.v;
        } else if(W > 0) {
            // 只能拿一部分
            result.push({
                id: sortedProduct.id,
                take: W / sortedProduct.w,     
            });
            allValue = allValue + sortedProduct.v * (W / sortedProduct.w);
            W = 0; // 装满了
        } else {
        // 不能拿了
            result.push({
                id: sortedProduct.id,
                take: 0,     
            });
        }
    }

    return {result: result, allValue: allValue};
}

// 测试一下
const result = backpack(50, products);
console.log(result);
  