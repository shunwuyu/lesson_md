function getMax(str) {
  var hash = {},
      maxstr, max = 1;
  for (var i = 0; i < str.length; i++) {
      if (!hash[str[i]]) {
          hash[str[i]] = 1;
      } else {
          hash[str[i]]++;
      }
      if (hash[str[i]] > max) {
          max = hash[str[i]];
          maxstr = str[i];
      }
  }
  return maxstr;
}

var str = 'abcdeffggghhhhiiiii';
console.log(getMax(str));