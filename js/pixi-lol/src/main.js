import { Application } from 'pixi'
const app = new Application({
  width: 800,
  height: 800,
  antialias: true,    // default: false 反锯齿
  transparent: false, // default: false 透明度
  resolution: 1       // default: 1 分辨率
})
document.body.appendChild(app.view)
