function typeOf(obj) {
  let res = Object.prototype.toString.call(obj).split(' ')[1]
  res = res.substring(0, res.length - 1).toLowerCase()
  return res
}
typeOf([])        // 'array'
typeOf({})        // 'object'
typeOf(new Date) 
