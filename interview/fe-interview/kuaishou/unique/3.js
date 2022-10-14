var array = [1, 1, '1'];

function unique(array) {
  var res = [];
  var sortedArray = array.concat().sort();
  var seen;
  for (var i = 0, len = sortedArray.length; i < len; i++) {
    if (!i || seen !== sortedArray[i]) {
      res.push(sortedArray[i])
    }
    seen = sortedArray[i];
  }
  return res;
}

console.log(unique(array));