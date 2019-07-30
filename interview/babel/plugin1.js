
/**
 * React.createElement("div", {
    auth: "/url/auth/1"
 });
 */
module.exports = function(babel) {
  const { types: t }  = babel;
  let result = {};
  const typeMap = {
    Identifier: 'name',
    StringLiteral: 'value'
  }
  const PLUGIN_NAME = 'babel-plugin-collect-react-props';
  return {
    name: PLUGIN_NAME,
    visitor: {
      Program: {
        enter(path) {
        },
        exit(path) {
          path.node.body.push(babel.parse(`window.__collectMap__ = ${JSON.stringify(result)}`).program.body[0]);  
        }
      },
      CallExpression: {
        enter(path, state) {
          const { collectKey } = state.opts;
          if (path.get('callee').isMemberExpression()) {
            // React.createElement
            if (path.node.callee.object.name === 'React' &&
            path.node.callee.property.name === 'createElement'
            ) {
              // 第二个参数是对象
              if (path.get('arguments') && path.get('arguments')[1].isObjectExpression()) {
                const properties = path.get('arguments')[1].node.properties
                for (let i = 0; i < properties.length; i ++) {
                  const property = properties[i];
                  const type = property.key.type;
                  const key = property.key[typeMap[type]];
                  const value = property.value.value;
                  if (!collectKey) {
                    console.warn(`when usse ${PLUGIN_NAME}, you should provide a collectKey in plugin option`)
                    return;
                  }
                  collectKey.forEach(ckey => {
                    if (ckey !== key) return;
                    if (!result[ckey]) result[ckey] = [];
                    if (!result[ckey].find(v => v === value)) result[ckey].push(value);
                  });
                }
              }
            }
          }
        }
      }
    }
  }
}