const common = {
  curState: () => go.game.state.getCurrentState(),
  addBtn: ({ x, y, callback, context, text }) => {
    // 向当前场景添加按钮
    const btn = common.curState().add.button(x, y, 'btn', callback, context, 0)
    // 创建文本标签
    const label = common.curState().make.text(btn.width / 2, btn.height / 2, text, {
      font: "36px", fill: "#ff5420"
    })
    // 将锚点定位在标签中间
    label.anchor = { x: 0.5, y: 0.5 }
    // 将标签加入到按钮中
    btn.addChild(label)
    return btn
  },
  addBattleInfo: ({ meAvatar, meName, opponentAvatar, opponentName }) => {
    go.common.addAvatar({ x: 47, y: 199, avatarKey: meAvatar })
    go.common.addAvatar({ x: 585, y: 199, avatarKey: opponentAvatar })
    common.curState().add.text(183, 223, meName, {
      font: "30px", fill: "#fff"
    })
    const opponentNameLabel = common.curState().add.text(578, 223, opponentName, {
      font: "30px", fill: "#fff"
    })
    opponentNameLabel.anchor.x = 1
    const mePiece = common.curState().add.image(184, 271, 'o')
    const opponentPiece = common.curState().add.image(545, 271, 'x')
    mePiece.width = 28
    mePiece.height = 28
    opponentPiece.width = 28
    opponentPiece.height = 28
    const meCDLabel = common.curState().add.text(228, 271, '', {
      font: '24px', fill: '#fff'
    })
    const opponentCDLabel = common.curState().add.text(532, 271, '', {
      font: '24px', fill: '#fff'
    })
    opponentCDLabel.anchor.x = 1

    return (meCD, opponentCD) => {
      meCDLabel.text = `${Math.round(meCD / 1000)}S`
      opponentCDLabel.text = `${Math.round(opponentCD / 1000)}S`
    }
  },
  addAvatar: ({ x, y, avatarKey, size = 128 }) => {
    // 先绘制头像
    const avatar = common.curState().add.image(x, y, avatarKey)
    // 设置为指定的尺寸
    avatar.width = size
    avatar.height = size
    // 设置圆形遮罩
    const mask = common.curState().add.graphics(x, y)
    mask.beginFill()
    mask.drawCircle(size / 2, size / 2, size - 8, size - 8)
    avatar.mask = mask
    // 绘制头像框
    const avatarBorder = common.curState().add.image(x, y, 'avatar')
    avatarBorder.width = size
    avatarBorder.height = size
  }
}

module.exports = common;