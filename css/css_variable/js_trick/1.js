// 过滤数组中的唯一值
console.log([1,2,3].filter(function (x){
	return x>1;//=>[2,3]
}))
const arr = [1,2,2,3,3,4,5,5,6]
// console.log(arr.indexOf(2));
// console.log(arr.lastIndexOf(2));

// const filterUnique = (arr) => arr.filter((i) => arr.indexOf(i) !== arr.lastIndexOf(i));


// const result = filterUnique(arr)
// console.log(result)