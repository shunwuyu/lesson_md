## event
事件，是用户与浏览器互动过程中，最高频的一种交互机制，用户无论是鼠标点击，滚动，拖拽
触发者，
处理者，连接这两者以及赋能二者能力的就是事件机制.
var btn = document.getElementById('btn')

btn.addEventListener('click', function (e) {
  // 按钮点击事件被监听到，开始处理事务
}, false)
先学回调：
*白岩松：走得太远，别忘了当初为什么出发*
```js
function doSomeThing (thing) {
  console.log(thing)
}

function comeTo (a, b, cb) {
  const person = `找${a}吃鸡，会${b}`;
  cb(person);
}

comeTo('松哥', '城区钢枪,飞黄腾达，100%吃鸡', (str) => {
  console.log(str);
})
// 到 Juejin 学习 Node
```

## flow
search事件 请求歌曲
afterSearch 里面触发 choose
choose 事件 inquirer 展示歌曲 并且命令行交互
afterChoose 选中之后触发 find 
find 一个请求
afterFind 传入 歌曲信息
触发 play 里面 Player 播放
playing 事件 注册 playend 触发 playEnd
