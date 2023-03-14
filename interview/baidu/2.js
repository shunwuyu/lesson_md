var permutation = function(s) {
    let ans = [];
    // 去重  
    s = s.split('').sort((a, b) => {
        // 正序排  相同字符放一起
        return a > b ? 1 : -1;
    }).join('')
    // 零时状态， 可选字符集
    const dfs = (curr, store) => {
        // 1. 是否满足条件， 记录结果
        // 2. 是判断终止条件
        if (!store.length ) {
            return ans.push(curr)
        }
        
        // 3. 是继续搜索了
        // 遍历store
        for (let i = 0; i < store.length; i++) {
            // 这两次完全一样的
            if (i > 0 && store[i] === store[i-1]) continue
            dfs(curr + store[i], store.slice(0, i) + store.slice(i+1))
        }

    }
    // 开始是空字符， 可选的是整个字符串
    dfs('', s)

    return ans
};

console.log(permutation('baidu').includes('iabdu'))