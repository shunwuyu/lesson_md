function f(n) {
  if (n == 1) return 1;
  if (n == 2) return 2;

  let ret = 0;
  let pre = 2;
  let prepre = 1;
  for (let i = 3; i <= n; i++) {
    ret = pre + prepre;
    prepre = pre;
    pre  = ret;
  }
  return ret;
}

console.log(f(7));