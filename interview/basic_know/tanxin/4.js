const products = [
    {id:1, v: 60, w: 10}, 
    {id:2, v: 100, w: 20}, 
    {id:3, v: 120, w: 30}
];  // 新建一个数组表示商品列表，每个商品加个id用于标识

function backpack01(n, W, products) {
    if(n < 0 || W <= 0) {
        return 0;
    }
    // 自顶向下
    const noLast = backpack01(n-1, W, products);  // 不放最后一个
    let getLast = 0;
    if(W >= products[n].w){  // 如果最后一个放得下
        getLast = products[n].v + backpack01(n-1, W-products[n].w, products);
    }
    const result = Math.max(noLast, getLast);
    return result;
    // 测试一下
}
const result = backpack01(products.length-1, 50, products);
console.log(result);