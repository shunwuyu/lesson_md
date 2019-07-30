export default function (babel) {
  const { types: t } = babel;
  const typeMap = {
    Identifier: 'name',
    StringLiteral: 'value'
  }
  return {
    name: "ast-transform", // not required
    visitor: {
      CallExpression (path, state) {

      }
    }
  };
}
