var array1 = [1, 2, '1', 2, 1];
var array2 = [1, 1, '1', 2, 2];

function unique(array, isSorted) {
  var res = [];
  var seen = [];

  for (var i = 0, len = array.length; i < len; i++) {
      var value = array[i];
      if (isSorted) {
          if (!i || seen !== value) {
              res.push(value)
          }
          seen = value;
      }
      else if (res.indexOf(value) === -1) {
          res.push(value);
      }        
  }
  return res;
}

console.log(unique(array1)); // [1, 2, "1"]
console.log(unique(array2, true));