function noRepeat(arr) {
  var i = 0,
  len = arr.length,
  obj = {},
  result = [];
  while(++i < len) {
  obj[arr[i]] || result.push(arr[i])
  obj[arr[i]] = true;
 }
 return result;
 }

 console.log(noRepeat([1,2,2,3,4,1,6]));
 console.log(new Set([1,2,2,3,4,1,6]));