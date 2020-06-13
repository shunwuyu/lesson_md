var arrayLike = {
  0: 'OB',
  1: 'Koro1',
  length: 2
}
Array.prototype.push.call(arrayLike, '添加元素1', '添加元素2');
console.log(arrayLike) // {"0":"OB","1":"Koro1","2":"添加元素1","3":"添加元素2","length":4}
