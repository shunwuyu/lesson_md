const ncname = '[a-zA-Z_][\\w\\-\\.]*';/*有一个字母_ \w a-z、A-Z、0-9，以及下划线, 包含 _ (下划线) 字符。 */
const singleAttrValues = [
  /"([^"]*)"+/.source,  // 双引号
  /'([^']*)'+/.source, // 单引号
  /([^\s"'=<>`]+)/.source // 
]
const singleAttrAssign = /(?:=)/
const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')' // 伪元素
const endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>') // [^>] 不是 > 
const startTagOpen = new RegExp('^<' + qnameCapture) //开始 
const startTagClose = /^\s*(\/?)>/ //匹配开始的结束标签 自闭合  \s 空格
let index = 0;
const stack = [];
const forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/
const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g
let currentParent, root;

const singleAttrIdentifier = /([^\s"'<>/=]+)/
const attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
)
// 前进前进
function advance (n) {
  index += n
  html = html.substring(n)
}

function makeAttrsMap (attrs) {
  const map = {}
  for (let i = 0, l = attrs.length; i < l; i++) {
      map[attrs[i].name] = attrs[i].value;
  }
  return map
}

function processIf (el) {
  const exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
      el.if = exp;
      if (!el.ifConditions) {
          el.ifConditions = [];
      }
      el.ifConditions.push({
          exp: exp,
          block: el
      });
  }
}

function processFor (el) {
  let exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      const inMatch = exp.match(forAliasRE);
      el.for = inMatch[2].trim();
      el.alias = inMatch[1].trim();
  }
}


function getAndRemoveAttr (el, name) {
  let val
  if ((val = el.attrsMap[name]) != null) {
      const list = el.attrsList
      for (let i = 0, l = list.length; i < l; i++) {
          if (list[i].name === name) {
              list.splice(i, 1)
              break
          }   
      }
  }
  return val
}


var html = '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>';
// ast AST抽象语法树   babel  vue 
function parse () {
  return parseHTML();
}

function parseEndTag (tagName) {
  let pos;
  for (pos = stack.length - 1; pos >= 0; pos--) {
      if (stack[pos].lowerCasedTag === tagName.toLowerCase()) {
          break;
      }
  }

  if (pos >= 0) {
      if (pos > 0) {
          currentParent = stack[pos - 1];
      } else {
          currentParent = null;
      }
      stack.length = pos;
  }   
}

function parseText (text) {
  if (!defaultTagRE.test(text)) return;

  const tokens = [];
  let lastIndex = defaultTagRE.lastIndex = 0
  let match, index
  while ((match = defaultTagRE.exec(text))) {
      index = match.index

      if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)))
      }
      
      const exp = match[1].trim()
      tokens.push(`_s(${exp})`)
      lastIndex = index + match[0].length
  }

  if (lastIndex < text.length) {
      tokens.push(JSON.stringify(text.slice(lastIndex)))
  }
  return tokens.join('+');
}


function parseStartTag () {
  const start = html.match(startTagOpen); 
  if (start) {
      const match = {
          tagName: start[1],
          attrs: [],
          start: index
      }
      advance(start[0].length); // 这些做完了， 该做属性了
      let end, attr
      // 标签结束或 属性匹配完成
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          // console.log(html, index, '------------');
          advance(attr[0].length)
          match.attrs.push({
              name: attr[1],
              value: attr[3]
          });
      }
      // console.log(html, '++++')
      if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match
      }
  }
}

function parseHTML () {
  // 慢慢消灭html  advance函数
  while(html) {
      // 从 < 开始做
      let textEnd = html.indexOf('<');
      // 一开始就是html
      if (textEnd === 0) {
          // 是结束标签吗 </p> 没得玩了
          const endTagMatch = html.match(endTag)
          if (endTagMatch) {
              advance(endTagMatch[0].length);
              // parseEndTag(endTagMatch[1]);
              continue;
          }
          //  开始标签
          if (html.match(startTagOpen)) {
              const startTagMatch = parseStartTag();
              // console.log(startTagMatch, '+++++');
              // return;
              const element = {
                  type: 1,
                  tag: startTagMatch.tagName,
                  lowerCasedTag: startTagMatch.tagName.toLowerCase(),
                  attrsList: startTagMatch.attrs,
                  attrsMap: makeAttrsMap(startTagMatch.attrs),
                  parent: currentParent,
                  children: []
              }

              processIf(element);
              processFor(element);

              if(!root){
                  root = element
              }

              if(currentParent){
                  currentParent.children.push(element);
              }
              console.log(startTagMatch.unarySlash, "|||||||||||||")
      
              if(!startTagMatch.unarySlash) {
                  stack.push(element);
                  currentParent = element;
              }
              continue;
          }
      } else {
          // 文本标签
          text = html.substring(0, textEnd)
          advance(textEnd)
          let expression;
          if (expression = parseText(text)) {
              currentParent.children.push({
                  type: 2,
                  text,
                  expression
              });
          } else {
              currentParent.children.push({
                  type: 3,
                  text,
              });
          }
          continue;
      }
  }
  return root;
}

const ast = parse();
console.log(ast);

