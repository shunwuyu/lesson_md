(()=>{var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return n[e](a,a.exports,o),a.exports}o.m=n,o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".bundle.js",o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="split_demo:",o.l=(n,r,a,i)=>{if(e[n])e[n].push(r);else{var d,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var c=u[s];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+a){d=c;break}}d||(l=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",t+a),d.src=n),e[n]=[r];var p=(t,r)=>{d.onerror=d.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=p.bind(null,d.onerror),d.onload=p.bind(null,d.onload),l&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",(()=>{var e={179:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=a);var i=o.p+o.u(t),d=new Error;o.l(i,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,r[1](d)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,a,[i,d,l]=n,u=0;if(i.some((t=>0!==e[t]))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);l&&l(o)}for(t&&t(n);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunksplit_demo=self.webpackChunksplit_demo||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("btn-index"),t=document.getElementById("btn-login");e.addEventListener("click",(function(){o.e(826).then(o.bind(o,902)).then((e=>{(0,e.default)()}))})),t.addEventListener("click",(function(){o.e(535).then(o.bind(o,907)).then((e=>{(0,e.default)()}))}))}))})();