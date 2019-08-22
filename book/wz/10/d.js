const w = new Map();
function f(n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  if (w.has(n)) {
    return w.get(n);
  }
  var ret = f(n-1) + f(n-2);
  w.set(n, ret);
  return ret;
}

console.log(f(2));