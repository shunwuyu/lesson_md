function digital_root(n) {
  // 所有位数相加之各是9的倍数的数字能被9整除， 
  return (n - 1) % 9 + 1;
}