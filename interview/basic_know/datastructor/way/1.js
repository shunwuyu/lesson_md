// https://juejin.cn/post/6844903941046550542
// 无参时的使用 按照ascii码进行排序
// 内部采用了什么排序呢？ 
let arr = [23, 12, 32, 5, 21, 7, 1]
// arr.sort()
// console.log(arr)
// - 如果a < b  返回 < 0 的值  a 应该在 b前面
// - 等于0   返回 0
// - 大于 
// arr.sort((a, b) => {
//     console.log("a:" + a)
//     return 1
// })
// console.log(arr)
// arr.sort((a, b) => {
//     console.log("a:" + a)
//     return -1
// })
// console.log(arr)
arr.sort((a, b) => {
    console.log("b:" + b)
    console.log("a:" + a)
    return a - b
})
console.log(arr)