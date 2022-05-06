var spread = [12, 5, 8, 130, 44]
// 筛选条件符合大于10的新数组
// filter 为数组中的每个元素调用一次 callback 函数，
// 并利用所有使得" callback 返回 true 或 等价于 true 的值 的元素"
// 创建一个新数组。
var filtered = spread.filter(n => n >= 10)
console.log('filtered', filtered)

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false },
    { 'user': 'ared',   'age': 24, 'active': false },
    { 'user': 'ered',   'age': 80, 'active': false },
    { 'abc': 'ered',   'age': 80, 'active': false }
];
var filteredUsers = users.filter(n => n.age===40 || n.age===24)
console.log('filter后的键名', filteredUsers) 

// 数组去重 filter 
var spread = [12, 5, 8, 8, 130, 44,130]
var filteredArr = spread.filter((item, idx, arr) => {
  return arr.indexOf(item) === idx;
})
// 筛选符合条件找到的第一个索引值等于当前索引值的数组
console.log('数组去重结果', filteredArr);

var spread2 = [12, 5, 8, 8, 130, 44,130]
var setFun = [...new Set(spread2)]
console.log('数组去重结果', setFun)

var arr=[12, 5, 8, 8, 130, 44,130,'a','b','a']
var obj={};
arr.forEach(function(item){
obj[item]=item;
})
// Object.keys(obj)
console.log(Object.keys(obj))

