const a = [1,2,3,4,5];
// const result = a.filter( 
//   item =>{
//     return item === 3
//   }
// )
// console.log(result);
// 性能优化懂么，find方法中找到符合条件的项，就不会继续遍历数组
const result = a.find( 
    item =>{
        return item === 3
    }
)
console.log(result);