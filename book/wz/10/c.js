var depth = 0;
function f(n) {
  ++depth;
  if (depth > 1000) throw new Error('出错了');

  if (n == 1) return 1;
  return f(n-1) + 1;
}
f(1001);