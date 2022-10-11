// 定义被反转的字符串 
const str = 'juejin'  
// 定义反转后的字符串
const res = str.split('').reverse().join('')

console.log(res)

// 判断一个字符串是否是回文字符串
// 'yessey'  正着读和倒着读都一🐱一样的字符串
// function isPalindrome(str) {
//     // 先反转字符串
//     const reversedStr = str.split('').reverse().join('')
//     // 判断反转前后是否相等
//     return reversedStr === str
// }

// console.log(isPalindrome('yessey'))

// - 还可以怎么做？
// 回文字符串还有另一个特性：如果从中间位置“劈开”，
// 那么两边的两个子串在内容上是完全对称的。
// 因此我们也可以结合对称性来做判断

function isPalindrome(str) {
    // 缓存字符串的长度
    const len = str.length
    // 遍历前半部分，判断和后半部分是否对称
    for(let i=0;i<len/2;i++) {
        if(str[i]!==str[len-i-1]) {
            return false
        }
    }
    return true
}
