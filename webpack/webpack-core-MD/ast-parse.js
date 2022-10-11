let acorn = require("acorn");
const walk = require("acorn-walk")
walk.simple(acorn.parse("let x = 10"), {
  Literal(node) {
    console.log(`Found a literal: ${node.value}`)
  }
})