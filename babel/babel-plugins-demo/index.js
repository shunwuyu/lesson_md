const babel = require("@babel/core");

const result = babel.transform("const result = 1 + 2;",{
    plugins:[
      require("./a")
    ]
});

console.log(result.code);