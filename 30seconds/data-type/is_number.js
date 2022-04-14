const isNumber = val => typeof val === 'number' && val === val;
console.log(typeof NaN);
console.log(isNumber(2));
// 区分是数字  不是NaN呢？
console.log(isNumber(NaN));

