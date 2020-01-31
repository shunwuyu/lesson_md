function maskify(cc) {
  // let str = [];
  // if (cc.length < 4) return cc;
  // for (let i = 0; i < cc.length ; i++) {
  //   if (i < cc.length - 4) str[i] = '#'
  //   else str[i] = cc[i]
  // }
  // return str;
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify('Skippy'));