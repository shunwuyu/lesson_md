// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
// 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。

// 这道题很多同学第一眼看过去，
// 可能本能地会想到这样一种解法：
// 若字符串本身不回文，
// 则直接遍历整个字符串。
// 遍历到哪个字符就删除哪个字符、
// 同时对删除该字符后的字符串进行是否回文的判断，
// 看看存不存在删掉某个字符后、字符串能够满足回文的这种情况。
// 有什么问题？ 不是一个高效的解法
// 对称性 和 双指针。
// 1. 我们首先是初始化两个指针，一个指向字符串头部，另一个指向尾部
// 2. 如果两个指针所指的字符恰好相等，那么这两个字符就符合了回
// 文字符串对对称性的要求，跳过它们往下走即可
// 3. 不对称发生了，意味着这是一个可以“删掉试试看”的操作点
// [left+1, right] 或 [left, right-1] 的字符串是否回文
// 我们跳过了 b，[left+1, right] 的区间就是 [2, 2]，
// 它对应 c 这个字符，单个字符一定回文。
// 这样一来，删掉 b 之后，左右指针所指的内部区间是回文的，
// 外部区间也是回文的，可以认为整个字符串就是一个回文字符串了。
const validPalindrome = function(s) {
    // 缓存字符串的长度
    const len = s.length

    // i、j分别为左右指针
    let i=0, j=len-1
    
    // 当左右指针均满足对称时，一起向中间前进
    while(i<j&&s[i]===s[j]) {
        i++ 
        j--
    }
    
    // 尝试判断跳过左指针元素后字符串是否回文
    if(isPalindrome(i+1,j)) {
      return true
    }
    // 尝试判断跳过右指针元素后字符串是否回文
    if(isPalindrome(i,j-1)) {
        return true
    }
    
    // 工具方法，用于判断字符串是否回文
    function isPalindrome(st, ed) {
        while(st<ed) {
            if(s[st] !== s[ed]) {
                return false
            }
            st++
            ed--
        } 
        return true
    }
    
    // 默认返回 false
    return false 
};

console.log(validPalindrome('aba'));
console.log(validPalindrome('abca'));
console.log(validPalindrome('abegebca'));