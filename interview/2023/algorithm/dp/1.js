/**
* @param {number} n
* @return {number}
*/
const climbStairs = function(n) {
    // 处理递归边界
    if(n === 1) {
        return 1
    }
    if(n === 2){
        return 2
    }
    // 递归计算
    return climbStairs(n-1) + climbStairs(n-2)
};
console.log(climbStairs(30));