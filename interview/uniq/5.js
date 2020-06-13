function distinct(array) {
  var obj = {};
  return array.filter(function(item, index, array){
      return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  })
}
