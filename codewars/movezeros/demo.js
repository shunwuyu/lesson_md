// const moveZeros = arr => {
//   let temp = []
//   let data = arr.reduce((pre, cur) => {
//     if (cur !== 0) return [...pre, cur]
//     else {
//       temp.push(cur)
//       return [...pre]
//     }
//   }, [])
//   return data.concat(temp)
// }
// 使用filter过滤出所有非0的数据  然后再filter出来等于0的 再concat
// const moveZeros = arr => {
//   let data = arr.filter(ele => ele !== 0)
//   return data.concat(new Array(arr.length - data.length).fill(0))
// }

const moveZeros = arr => arr.filter(ele => ele !== 0).concat(arr.filter(ele => ele === 0))

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))