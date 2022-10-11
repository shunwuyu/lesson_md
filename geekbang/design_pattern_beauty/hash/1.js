function hash(key) {
  let length = key.length;
  return parseInt(key.substr(length-2, length))
}

console.log(hash("051167"));