// 它提供了一种方法来表示大于 2 53 - 1 的整数。
// 这原本是 Javascript中可以用 Number 表示的最大数字。BigInt 可以表示任意大的整数。
// 表示高分辨率的时间戳，使用大整数id  大整数执行算术操作
// 整数字面量后面加 n 的方式定义一个 BigInt
const theBiggestInt = 9007199254740991n;
const alsoHuge = BigInt(9007199254740991);

console.log(typeof theBiggestInt);

const b1 = BigInt(Number.MAX_SAFE_INTEGER);
console.log(b1);
console.log(Number.MIN_SAFE_INTEGER);

const maxPlusOne = b1 + 1n;
console.log(maxPlusOne);