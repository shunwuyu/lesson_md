var a = [1, 2, 3];
console.log(a.__proto__.constructor === Array); //true
console.log(a.__proto__.constructor === Object);//false