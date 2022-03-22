function fibonacci(n, pre = 0, cur = 1) {
    if (n === 0) {
        return n;
    }
    if (n === 1) {
        return cur;
    }
    return fibonacci(n - 1, cur, pre + cur);
}

fibonacci(6)
// 由于函数改成了尾递归的形式，第f(n)只与f(n-1)有关，大量重复计算的问题也得到了解决
  