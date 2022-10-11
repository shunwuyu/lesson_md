const products = [
    {id:1, v: 60, w: 10}, 
    {id:2, v: 100, w: 20}, 
    {id:3, v: 120, w: 30}
];    // 新建一个数组表示商品列表，每个商品加个id用于标识

function backpack01(W, products) {
    const d = [];      // 初始化一个数组放计算中间值，其实为二维数组，后面填充里面的数组
    const res = [];    // 记录每次放入的最后一个商品, 同样为二维数组
    const length = products.length;

// i表示行，为商品个数，数字为 0 -- (length - 1)
// j表示列，为背包容量，数字为 0 -- W
for(let i = 0; i < length; i++){
    d.push([]);
    res.push([]);
    for(let j = 0; j <= W; j++) {
    if(j === 0) {
        // 背包容量为0
        d[i][j] = 0;
        res[i][j] = null;  
    } else if(i === 0) {
        if(j >= products[i].w) {
        // 可以放下第一个商品
        d[i][j] = products[i].v;
        res[i][j] = products[i];
        } else {
        d[i][j] = 0;
        res[i][j] = null;
        }
    } else {
        const noLast = d[i-1][j];
        
        let getLast = 0;
        if(j >= products[i].w) {
        getLast = products[i].v + d[i-1][j - products[i].w];
        }
        
        if(noLast > getLast) {
        d[i][j] = noLast;
        } else {
        d[i][j] = getLast;
        res[i][j] = products[i];   // 记录最后一个商品
        }
    }
    }
}   

    // 回溯res, 得到最优解
    let tempW = W;
    let tempI = length - 1;
    const bestSol = [];
    while (tempW > 0 && tempI >= 0) {
        const last = res[tempI][tempW];
        bestSol.push(last);
        tempW = tempW - last.w;
        tempI = tempI - 1;
    }

    console.log(d);
    console.log(bestSol);
    return {
        totalValue: d[length-1][W],
        solution: bestSol
    }
}
  
// 测试一下
const result = backpack01(50, products);
console.log(result);   // 220