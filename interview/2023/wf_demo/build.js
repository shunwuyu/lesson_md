const fs = require('fs')
const path = require('path')
const babylon = require('babylon')
const traverse = require('@babel/traverse').default
const { transformFromAst } = require('@babel/core')

// 使用 Babel 转换代码
function readCode(filePath) {
    // 读取文件内容
    const content = fs.readFileSync(filePath, 'utf-8')
    // 生成 AST
    const ast = babylon.parse(content, {
      sourceType: 'module'
    })
    // 寻找当前文件的依赖关系
    const dependencies = []
    traverse(ast, {
      ImportDeclaration: ({ node }) => {
        dependencies.push(node.source.value)
      }
    })
    // 通过 AST 将代码转为 ES5
    const { code } = transformFromAst(ast, null, {
      presets: ['@babel/preset-env']
    })
    return {
      filePath,
      dependencies,
      code
    }
  }

function getDependencies(entry) {
    // 读取入口文件 然后创建一个数组，该数组的目的是存储代码中涉及到的所有文件  
    const entryObject = readCode(entry)
    const dependencies = [entryObject]
    // console.log(dependencies, '???');
    // 遍历所有文件依赖关系
    for (const asset of dependencies) {
        // 获得文件目录
        // console.log(asset.filePath);
        const dirname = path.dirname(asset.filePath)
        // console.log(dirname, '?????')
        asset.dependencies.forEach(relativePath => {
            // 获得绝对路径
            const absolutePath = path.join(dirname, relativePath)
            if (/\.css$/.test(absolutePath)) {
                const content = fs.readFileSync(absolutePath, 'utf-8')
                const code = `
                const style = document.createElement('style')
                style.innerText = ${JSON.stringify(content).replace(/\\r\\n/g, '')}
                document.head.appendChild(style)
                `
                dependencies.push({
                    filePath: absolutePath,
                    relativePath,
                    dependencies: [],
                    code
                })
            } else {
                // console.log(absolutePath);
                const child = readCode(absolutePath)
                child.relativePath = relativePath
                dependencies.push(child)
            }
        })
        console.log(dependencies);
    }
    // return dependencies
    bundle(dependencies, entry);
}

function bundle(dependencies, entry) {
    // console.log(dependencies, entry, '/////');
    let modules = ''
    dependencies.forEach(dep => {
        const filePath = dep.relativePath || entry
        modules += `'${filePath}': (
            function (module, exports, require) { ${dep.code} }
        ),`
    })
    const result = `
    (function(modules) {
      function require(id) {
        const module = { exports : {} }
        modules[id](module, module.exports, require)
        return module.exports
      }
      require('${entry}')
    })({${modules}})
  `
    // 当生成的内容写入到文件中
    fs.writeFileSync('./bundle.js', result)
}

getDependencies('./entry.js')
