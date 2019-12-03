require('./js/libs/weapp-adapter')
window.p2 = require('./js/libs/p2.js')
window.PIXI = require('./js/libs/pixi.js')
window.Phaser = require('./js/libs/phaser-split.js')

window.WIDTH = 750 
window.SCALE = WIDTH / canvas.width
window.HEIGHT = canvas.height * SCALE


window.go = {
  game: null,                      // 游戏实例
  userInfo: null,                  // 玩家信息
  gameClub: null, 
  common: require('js/common')  
}

const config = {
  width: WIDTH,             // 游戏世界宽度
  height: HEIGHT,           // 游戏世界高度
  renderer: Phaser.CANVAS,  // 渲染器，这里我们使用 canvas
  canvas: canvas            // 将游戏绘制在 adapter 为我们创建的 canvas 上
}

const game = new Phaser.Game(config)  
go.game = game
game.state.add('start', require('./js/states/start')) 
game.state.add('menu', require('./js/states/menu'))
game.state.add('practice', require('./js/states/practice'))
game.state.start('start');   

console.log(SCALE);
