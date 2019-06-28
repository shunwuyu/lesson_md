const likes = names => {
  switch(names.length) {
    case 0: 
      return 'no one likes this'
    case 1: 
      return names[0] + ' likes this'
    case 2: 
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    default:
      return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this'
  }
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));