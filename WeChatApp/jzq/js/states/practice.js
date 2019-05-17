let cd
let board
let currentPlayer
let intervalId
let lastTimestamp
let renderCD
let setPiece


function reset() {
  // 重设棋盘，0 是自己, 1是对手，-1是空
  board = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]
  currentPlayer = Math.round(Math.random())
  cd = [60000, 60000]
  lastTimestamp = Date.now()
  intervalId = setInterval(() => {
    const current = Date.now()
    const delta = current - lastTimestamp
    lastTimestamp = current
    cd[currentPlayer] = cd[currentPlayer] - delta
    renderCD(cd[0], cd[1])
  })
}


class Practice extends Phaser.State {
  create() {
    this.add.image(0, 0, 'bg_playing')
    reset()
    renderCD = go.common.addBattleInfo({
      meAvatar: go.userInfo.avatarUrl || 'avatar_unknow',
      meName: go.userInfo.nickName,
      opponentAvatar: 'avatar_unknow',
      opponentName: '电脑',
    })
  }
}

module.exports = Practice