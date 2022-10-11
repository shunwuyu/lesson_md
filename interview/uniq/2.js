function distinct(a, b) {
  let arr = a.concat(b);
  return arr.filter((item, index)=> {
      return arr.indexOf(item) === index
  })
}
