// console.log(typeof null); //是一个对象
// console.log(typeof undefined); //特殊值， 未定义， 表示缺少值

const isNull = val => val === null;
const isUndefined = val => val === undefined;
const isNil = val => val === undefined || val === null;