function addStartBtn(cb) {
  const config = {
    type: 'Image',
    image: 'images/btn_start.png',
    style: {
      left: 248 / SCALE,   // 除以 SCALE 是为了将设计稿尺寸转为 canvas 实际尺寸
      top: 870 / SCALE,
      width: 254 / SCALE,
      height: 91 / SCALE,
    },
  }
  const startBtn = wx.createUserInfoButton(config)
  startBtn.onTap((res) => {
    // 若用户拒绝授权，则返回值没有 userInfo 值
    if (res.userInfo) {
      cb(res.userInfo)
    }
  })
  return startBtn
}
class Start extends Phaser.State {

  addStartBtn (cb) {
    const config = {
      type: 'Image',
      image: 'images/btn_start.png',
      style: {
        left: 248 / SCALE,   // 除以 SCALE 是为了将设计稿尺寸转为 canvas 实际尺寸
        top: 870 / SCALE,
        width: 254 / SCALE,
        height: 91 / SCALE,
      },
    }
    const startBtn = wx.createUserInfoButton(config)
    startBtn.onTap((res) => {
      // 若用户拒绝授权，则返回值没有 userInfo 值
      if (res.userInfo) {
        cb(res.userInfo)
      }
    })
    return startBtn

  }

  preload() {
    // 稍后添加
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.load.image('bg_menu', 'images/bg_menu.png')
    this.load.image('bg_playing', 'images/bg_playing.png')
    this.load.image('bg_rank', 'images/bg_rank.png')
    this.load.image('bg_waiting', 'images/bg_waiting.png')
    this.load.image('btn', 'images/btn_menu.png')
    this.load.image('avatar', 'images/avatar.png')
    this.load.image('avatar_unknow', 'images/avatar_unknow.png')
    this.load.image('o', 'images/o.png')
    this.load.image('x', 'images/x.png')
  }

  create() {
    this.game.add.image(0, 0, 'bg_menu');
    
    const startBtn = addStartBtn((userInfo) => {
      // 销毁开始按钮
      startBtn.destroy()
      // 将玩家信息存入 global object
      go.userInfo = userInfo
      // 预加载玩家头像，微信头像为空则不加载
      if (go.userInfo.avatarUrl !== '') {
        this.load.image(go.userInfo.avatarUrl, go.userInfo.avatarUrl)
        // 在 preload 生命周期函数以外进行的资源加载必须手动开始加载
        this.load.start()
      }

      this.game.state.start('menu')

    })

    go.gameClub = wx.createGameClubButton({
      icon: 'green',
      style: {
        left: 10,
        top: 76,
        width: 40,
        height: 40
      }
    })
    go.gameClub.show();
  }
}

module.exports = Start