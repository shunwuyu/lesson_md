// 动态规划在查找有很多重叠子问题的情况的最优解时有效。
// 它将问题重新组合成子问题
// 为了避免多次解决这些子问题，它们的结果都逐渐被计算并被保存，
// 从简单的问题直到整个问题都被解决

const fib = function(n) { 
    if(n<2) return n
    let dep = [0,1]; // 前一项和当前项
    for(let i=2;i<=n;i++){
        let sum = dep[0] + dep[1]
        dep[0] = dep[1]
        dep[1] = sum
    }
    return dep[1]
}

