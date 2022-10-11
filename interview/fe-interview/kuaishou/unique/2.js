var array = [1, 1, '1'];

function unique(array) {
  var res = [];
  for (var i = 0, len = array.length; i < len; i++) {
    var current = array[i];
    if (res.indexOf(current) === -1) {
      res.push(current)
    }
  }
  return res;
}

console.log(unique(array));