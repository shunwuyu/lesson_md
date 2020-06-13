function distinct(array) {
  var res = [];
  var sortedArray = array.concat().sort();
  var seen;
  for (var i = 0, len = sortedArray.length; i < len; i++) {
      // 如果是第一个元素或者相邻的元素不相同
      if (!i || seen !== sortedArray[i]) {
          res.push(sortedArray[i])
      }
      seen = sortedArray[i];
  }
  return res;
}

作者：ikoala
链接：https://juejin.im/post/5e02110ee51d4557f046147b
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。