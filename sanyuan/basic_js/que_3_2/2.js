// 当一侧操作数为 String 类型，会优先将另一侧转换为字符串类型。
console.log(1+'2')
// 当一侧操作数为 Number 类型，另一侧为原始类型，则将原始类型转换为 Number 类型。
console.log(1 + true);
// 当一侧操作数为 Number 类型，另一侧为引用类型，将引用类型和 Number 类型转换成字符串后拼接。
console.log(1 + {});
// 如果结果是原始值（不是一个对象），则将其转换为一个数字
console.log(3*{valueOf:function () { return 5 }}) // 15
// 否则，调用 toString() 方法。
3*{toString:function () { return 5 }} // 15
console.log(3 + {}, 3 * {}); // 3[object object] NaN

console.log({} + {} );

console.log(Boolean('false'))
console.log(Boolean('undefined'))

// a == 1 && a == 2 && a == 3
const a = {
  value:[3,2,1],
  valueOf: function(){return this.value.pop()}
}

console.log(a == 1 && a == 2 && a == 3);