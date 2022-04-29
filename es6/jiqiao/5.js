// 交换变量的值
let bears = 'bears';
let tigers = 'tigers';
// let tmp = bears;
// bears = tigers;
// tigers = tmp;
[bears, tigers] = [tigers, bears]
console.log(bears) // tigers
console.log(tigers) // bears