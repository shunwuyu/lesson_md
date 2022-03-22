function fibonacci(n, pre, cur) {
    if (n === 0) {
      return n;
    }
    if (n === 1) {
      return cur;
    }
    return fibonacci(n - 1, cur, pre + cur);
  }
  