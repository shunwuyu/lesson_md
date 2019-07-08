var fs = require("fs")

function add(a, b) {
  let result = a + b;
  fs.writeFileSync("result.txt", result);
  return result;
}

exports.add = add;