let obj = {
  a: 1,
  b: 2,
  func: function() {
    console.log(this.a);
  }
}
// console.log(JSON.stringify(obj)); // strigify 后function没了
let obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2);