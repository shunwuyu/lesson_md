const parser = require('@babel/parser');

function eval() {
    const ast = parser.parse(code);
    evaluate(ast.program);
}


const scope = new Map(); // 全局作用域
// 递归处理每个AST  对象树的结构
const astInterpreters = {
    Program(node) {
        node.body.forEach(item => {
            evaluate(item);
        })
    },
    VariableDeclaration(node) {
        node.declarations.forEach((item) => {
            evaluate(item);
        });
    },
    VariableDeclarator(node) {
        // console.log(node, '????', '----------')
        const declareName = evaluate(node.id);
        // console.log(declareName, '/////')
        if (scope.get(declareName)) {
            throw Error('duplicate declare variable：' + declareName);
        } else {
            const valueNode = node.init;
            let value;
            // console.log(valueNode, '///???');
            if (valueNode.type === 'Identifier') { // 引用式
                value = scope.get(valueNode.name);
            } else {
                // console.log(valueNode, '////////')
                value = evaluate(valueNode);  // 简单
            }
            scope.set(declareName, value);
        }
    },
    ObjectExpression(node) {
        const obj = {};
        node.properties.forEach(prop => {
            // console.log(prop.value, '--------value')
            const key = evaluate(prop.key);
            const value = evaluate(prop.value);
            obj[key] = value;
        });
        return obj;
    },
    Identifier(node) {
        return node.name;
    },
    NumericLiteral(node) {
        // console.log(node, '??????');
        return node.value;
    },
    ExpressionStatement(node, scope) {
        return evaluate(node.expression);
    },
    AssignmentExpression(node) {
        let curNode = node;
        console.log(node, '//////');
        const targetArr = [curNode.left];
        while(curNode.right.type === 'AssignmentExpression') {
            curNode = curNode.right;
            targetArr.push(curNode.left);
        }
        const value = evaluate(curNode.right);

        targetArr.forEach(target => {
            if (target.type === 'Identifier'){
                const varName = evaluate(target);
                scope.set(varName, value);
            } else if (target.type === 'MemberExpression') {
                const objName = evaluate(target.object);
                const obj = scope.get(objName);
        
                const propName = evaluate(target.property);
                obj[propName] = value;
            }  
        })
    } 
}

function evaluate(node) { // 解释器
  // if (node.type == 'AssignmentExpression')
  //   console.log(node);
  // console.log(node, '-------')
    // if (node.type == 'VariableDeclaration') {

    //   console.log(node);
    // }
    // if (node.type == 'VariableDeclarator') {
    //   // console.log(node);
    // }

    try {
        return astInterpreters[node.type](node);
    } catch(e) {
        console.error('不支持的节点类型：' + node.type, e);
    }
}

// const code = `
// let a = { dong: 111};
// let b = { guang: 222};
// let c = b;
// `

const code = `
let a = { n: 1};
let preA = a;
a.x = a = { n: 2};
`
eval(code);

console.log(scope);