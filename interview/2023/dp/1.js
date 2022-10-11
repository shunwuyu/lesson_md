var lenLongestFibSubseq = function (arry) {
    // 
    let map = new Map()
    
    for (let i = 0; i < arry.length; i++) {
        // 下标缓存
        map.set(arry[i], i)
    
    }
    
    let max = 0
    
    let dp = Array.from({ length: arry.length }, () => new Array(arry.length).fill(2))
    
    for (let k = 0; k < arry.length - 1; k++) {
        for (let j = k + 1; j < arry.length; j++) {
            let f2 = arry[k]
            let f3 = arry[j]
            let f1 = f3 - f2
    
            if (f1 < f2 && map.has(f1)) {
                dp[k][j] = Math.max(dp[map.get(f1)][k] + 1, dp[k][j])
                max = Math.max(max, dp[k][j]) // 最后取所有当中的最大值即可。
            }
        }
    }
    // console.log(map);
    return max    
};
console.log(lenLongestFibSubseq([1,2,3,4,5,6,7,8]));
