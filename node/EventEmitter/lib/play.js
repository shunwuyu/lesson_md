const Player = require('player')

module.exports = (url) => {
  return new Promise((resolve, reject) => {
    // 实例化一个播放器，立刻启动播放
    const player = new Player(url)
    player.play()
    
    // 播放时候，触发 playing
    player.on('playing', function (item) {
      console.log('播放中!')
      resolve(player)
    })

    player.on('error', function (err) {
      // when error occurs
      console.log('播放出错!')
      reject(err)
    })
  })
}