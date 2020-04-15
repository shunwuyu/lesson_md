const getUserInfo = function(user) { 
  return `name: ${user.name}, age: ${user.age}`
}

// console.log(getUserInfo({name: "koala", age: 18}));
// getUserInfo()
console.log(getUserInfo({name: "kaola"})) 
getUserInfo({name: "kaola", height: 1.66})