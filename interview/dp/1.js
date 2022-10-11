const climStais = function(n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  return climStais(n-1) + climStais(n-2)
} 

console.log(climStais(99));