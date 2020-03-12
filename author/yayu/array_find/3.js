function createIndexFinder(dir) {
  return function(array, predicate, context) {
    var length = array.length;
    var index = dir > 0 ? 0 : length - 1;

    for (; index >= 0 && index < length; index += dir) {
      if (predicate.call(context, array[index], index, array)) return index;
    }

    return -1;
  }
}

var findIndex = createIndexFinder(1);
var findLastIndex = createIndexFinder(-1);

