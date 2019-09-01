var test = {
  a: 'a',
  b: 'b'
}
const newObj = JSON.parse(JSON.stringify(test));
newObj.a= 'c';
console.log(test.a);
