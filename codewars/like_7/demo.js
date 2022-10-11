function likes(names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);
  return templates[idx].replace(/{name}|{n}/g, function(val) {
    return val === '{name}'? names.shift(): names.length;
  })
}

// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
// console.log(likes(["Alex"]));
// console.log(likes(["Alex", "Jacob"]));
console.log(likes(["Alex", "Jacob", "Mark"]));