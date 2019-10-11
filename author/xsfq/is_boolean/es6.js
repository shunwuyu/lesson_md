const isBalanced = (str) => {
  const map = new Map([
      ["{", "}"],
      ["[", "]"],
      ["(", ")"]
  ])
  // map.set('+', '-');
  // console.log(map.get('{'));
  // for (let [key, val] of map) {
  //   console.log(key, val);
  // }

  let stack = [];

  for(let i = 0 ; i < str.length; ++i){
      let node = str[i]
      console.log(map.values());
      if (map.has(node)){
          stack.push(node)
      }
      else if ([...map.values()].includes(node)){
        // console.log([...map.entries()].filter(el => {
          
        //   return el[1] === node;
        // }).pop().shift(), '+++++');
          if (stack[stack.length - 1] !==
                              [...map.entries()].filter(el=>el[1]===node).pop().shift()
                       ){
              return false
          }
          //出栈
          stack.splice(stack.length-1, 1)
      }
  }

  return stack.length === 0
}

var expression = "{{}}{}{}"
var expressionFalse = "{}{{}";

console.log(isBalanced(expression));
console.log(isBalanced(expressionFalse));