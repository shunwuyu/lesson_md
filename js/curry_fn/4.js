let list = [
  {
      name:'lucy'
  },
  {
      name:'jack'
  }
]

let names = list.map(function(item) {
  return item.name;
})

let prop = curry(function(key,obj) {
  return obj[key];
})
names = list.map(prop('name'));