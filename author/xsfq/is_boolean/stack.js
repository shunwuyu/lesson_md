function isBalanced(exp){
  let info = exp.split("")
  let stack = []

  for(let i = 0; i < info.length; ++i){
      let el = info[i]
      if (el == "{"){
          stack.push("{")
      }
      else if (el == "}"){
          if(stack.length === 0){
              return false;
          }
          stack.pop()
      }
  }

  return stack.length === 0
}