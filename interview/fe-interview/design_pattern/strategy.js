// https://lucifer.ren/fe-interview/#/./topics/design-pattern/strategy
// 要实现某一个功能有多种方案可以选择，这些方案被隐藏在算法之后。 比如 一个压缩文件的程序，既可以选择 zip 算法，也可以选择 gzip 算法。 这些算法灵活多样，而且可以随意互相替换。这种解决方案就是策略模式。
const mapper = {
  A() {
    return 'you got A';
  },
  B() {
    return 'you got B';
  },
  C() {
    return 'you got C';
  },
  D() {
    return 'you got D';
  }
}

function getTextByLetter(letter) {
  return mapper[letter]();
}
getTextByLetter('A'); // you got A
getTextByLetter('C');