// 一个部门JSON数据中，属性名是部门id，属性值是个部门成员id数组集合，
// 现在要把有部门的成员id都提取到一个数组集合中。
const deps = {
    '采购部':[1,2,3],
    '人事部':[5,8,12],
    '行政部':[5,14,79],
    '运输部':[3,64,105],
    '人事部':[99, [11, 13]]
}

// let member = [];
// for (let item in deps){
//     const value = deps[item];
//     if(Array.isArray(value)){
//         member = [...member,...value]
//     }
// }
// // 万一又重复的呢？
// member = [...new Set(member)]
// console.log(Object.values(deps));  // 需要先拿到key 再拿values？
// 有什么问题？  IE不支持
console.log(Object.values(deps).flat(Infinity))
