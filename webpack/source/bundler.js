const fs = require('fs');
const path = require("path");
const babylon = require("@babel/parser"); //js 解析器
const traverse = require("@babel/traverse").default;
const babel = require("@babel/core");

let ID = 0;

function createAsset(filename) {
  //获取文件，返回值是字符串
  const content = fs.readFileSync(filename, "utf-8");
  //讲字符串为ast（抽象语法树， 这个是编译原理的知识，说得简单一点就是，可以把js文件里的代码抽象成一个对象，代码的信息会存在对象中）
  //babylon 这个工具是是负责解析字符串并生产ast。
  const ast = babylon.parse(content, {
    sourceType: "module"
  });
  // console.log(ast);
  //用来存储 文件所依赖的模块，简单来说就是，当前js文件 import 了哪些文件，都会保存在这个数组里
  const dependencies = [];
  //遍历当前ast（抽象语法树）
  traverse(ast, {
    ImportDeclaration: ({node}) => {
      dependencies.push(node.source.value);
    }
  })
  // console.log(dependencies);
  const id = ID++;
  // console.log(content);
  //这边主要把ES6 的代码转成 ES5
  const { code } = babel.transformFromAstSync(ast, null, {
    presets: ["@babel/preset-env"]
  });
  // console.log({
  //   id,
  //   filename,
  //   dependencies,
  //   code
  // })
  return {
    id,
    filename,
    dependencies,
    code
  };
}
function createGraph(entry) {
  const mainAsset = createAsset(entry);
  // console.log(mainAsset);
  //既然要广度遍历肯定要有一个队列，第一个元素肯定是 从 "./example/entry.js" 返回的信息
  const queue = [mainAsset];
  for (const asset of queue) {
    const dirname = path.dirname(asset.filename);
    // console.log(dirname);
    asset.mapping = {}
    asset.dependencies.forEach(relativePath => {
      const absolutePath = path.join(dirname, relativePath);
      // console.log(absolutePath);
      const child = createAsset(absolutePath);
      // console.log(child);
      asset.mapping[relativePath] = child.id;
      queue.push(child);
    });
  }
  return queue
}
function bundle(graph) {
  let modules = "";
  //循环依赖关系，并把每个模块中的代码存在function作用域里
  graph.forEach(mod => {
    modules += `${mod.id}:[
      function (require, module, exports){
        ${mod.code}
      },
      ${JSON.stringify(mod.mapping)},
    ],`;
  });
  console.log(modules);
  const result = `
    (function(modules){
      //创建require函数， 它接受一个模块ID（这个模块id是数字0，1，2） ，它会在我们上面定义 modules 中找到对应是模块.
      function require(id){
        const [fn, mapping] = modules[id];
        function localRequire(relativePath){
          //根据模块的路径在mapping中找到对应的模块id
          return require(mapping[relativePath]);
        }
        const module = {exports:{}};
        //执行每个模块的代码。
        fn(localRequire,module,module.exports);
        return module.exports;
      }
      //执行入口文件，
      require(0);
    })({${modules}})
  `;

  return result;
}

const graph = createGraph("./example/entry.js");
console.log(graph);
const ret = bundle(graph);
fs.writeFileSync("./bundle.js", ret);
