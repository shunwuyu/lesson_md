let obj = {
  a: 1
}
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.a = 2;
console.log(obj);