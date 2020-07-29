var getCount = (prefix, n) => {
  let cur = prefix;
  let next = prefix + 1; //下一个前缀
  let count = 0;

  while(cur <= n) {
    count += next - cur;
    cur *= 10; 
    next *= 10;
  }

}