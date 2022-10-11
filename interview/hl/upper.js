var s1 = "get-element-by-id"
var f = function(s) {
  return s.replace(/-\w/g, function(x) {
      return x.slice(1).toUpperCase();
  })
}
console.log(f(s1));