function practice() {
  go.game.state.start('practice')
}

function battle() {
  // 跳转等待对手场景
  go.game.state.start('rank')
}

function rank() {
  // 跳转等待对手场景
  go.game.state.start('waiting')
}

function addMenu() {
  [
    // x    y     按钮文本    回调函数
    [  248, 750,  "单机练习", practice],
    [  248, 900,  "好友约战", battle],
    [  248, 1050, "好友排行", rank],
  ].map((btnConfig) => {
    // 调用 common 中的 addBtn 函数创建按钮
    go.common.addBtn({
      x: btnConfig[0],
      y: btnConfig[1],
      text: btnConfig[2],
      callback: btnConfig[3],
    })
  })
}

class Menu extends Phaser.State {
  constructor () {
    super()
    this.handleOnShow = this.handleOnShow.bind(this)
    this.handleGameStart = this.handleGameStart.bind(this)
  }
  handleOnShow () {
    console.log('onShow');
  }
  handleGameStart () {}
  create () {
    this.add.image(0, 0, 'bg_menu')
    this.initMenu()
  }
  initMenu() {
    wx.onShow(this.handleOnShow)
    addMenu()
    go.gameClub.show()
  }
  

}

module.exports = Menu