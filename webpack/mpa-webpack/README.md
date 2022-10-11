## nest nuxt next

npm i -g @nestjs/cli

swig 模版引擎之王


## mpa
多入口
一个 view index.html index.entry.js
ssr 多页

## 流程
nest
c 层： ‘/'
### 1
访问 view 下面的 index.html, 
### 2
为了 引入一个组件 banner
用 swig 引入 html
该 html 对应的 入口 js 为 indx.entry.js
indx.entry.js 引入了 组件里面的 js，css
### 3
最终 为了 让 indx.entry.js 打包完成之后 能塞到模板的正确位置
采取了 自定义 plugin