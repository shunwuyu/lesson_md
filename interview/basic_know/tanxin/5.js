const products = [
    {id:1, v: 60, w: 10}, 
    {id:2, v: 100, w: 20}, 
    {id:3, v: 120, w: 30}
]; 

function backpack01(W, products) {
    const d = [];  // 初始化一个数组放计算中间值，其实为二维数组，后面填充里面的数组
    const length = products.length;
    // i表示行，为商品个数，数字为 0 -- (length - 1)
    // j表示列，为背包容量，数字为 0 -- W
    for(let i = 0; i < length; i++){
        d.push([]); // 每一行的值
        for(let j = 0; j <= W; j++) {
            if(j === 0) {
                // 背包容量为0
                d[i][j] = 0;
            } else if (i === 0) {
                if(j >= products[i].w) {
                    // 可以放下第一个商品
                    d[i][j] = products[i].v;
                  } else {
                    d[i][j] = 0;
                  }
            } else {
                const noLast = d[i-1][j]; // 不要最后一个
                let getLast = 0;
                if(j >= products[i].w) {
                    // 去最后一个的
                    getLast = products[i].v + d[i-1][j - products[i].w];
                }
                if(noLast > getLast) {
                    d[i][j] = noLast;
                } else {
                    d[i][j] = getLast;
                }
            }
        }
    }
    return d[length-1][W];
}
// 测试一下
const result = backpack01(50, products);
console.log(result); 