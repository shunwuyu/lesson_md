// NaN表示的是非数字, 但是这个非数字也是不同的
// 两个NaN永远不可能相等。
console.log(NaN === NaN);

// 跟JS的隐式类型转换有关：
var str="123";
//要想把字符类型转成数字类型最快的方法-0
var num=str-0;//123
//但是+0不行
var str2=str+0; //"1230"
//除此之外乘以1或者除以1都是可以的
console.info("123"*1==="123"/1);
console.info(0===+0)
console.info(0===-0);
console.info(+0);
console.info(-0);

console.log(+0 === -0);