function f(n) {
  if (n == 1) return 1;
  return f(n - 1) + 1;
}
console.log(f(10));