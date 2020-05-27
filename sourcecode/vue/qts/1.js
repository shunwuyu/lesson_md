// https://juejin.im/post/5c73554cf265da2de33f2a32#heading-22

// Vue中的闭包骚操作
// 判断一个变量是否包含在传入字符串里
function makeMap (str,expectsLowerCase) {
  const map = Object.create(null)
  const list = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase 
    ? val => map[val.toLowerCase()] // 为true 小写
    : val => map[val]
}

let isMyName = makeMap('前端刘子民,帅比',true); 
console.log(isMyName('前端刘子民')); // true
console.log(isMyName('帅比')); // true
console.log(isMyName('丑逼')); //false


const isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
)
const isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
)

// web平台的保留属性有 style 和 class
// isReservedAttr = makeMap('style,class')
// console.log(isHTMLTag('htmls'));

// 不用重复计算
function cached (fn) {
  const cache = Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

const isReservedAttr = makeMap('style,class')
let cacheStyle = cached(isReservedAttr, 'style');
console.log(cacheStyle('style'));

function once (fn) {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}