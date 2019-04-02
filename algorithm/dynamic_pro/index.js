function fun(n) {
  if (n < 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  return fun(n -1) + fun(n-2)
}

console.log('12台阶的走法 ：' + fun(12) )

// f(4) = f(3) + f(2);
// f(3) = f(2) + f(1);