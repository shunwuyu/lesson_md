// 而 inquirer 是一个三方模块，
// 赋予我们跟命令行窗口更友好的交互方式，
// 通过 inquirer.prompt 我们了解到是哪一首歌曲被选中了，
// 最后当歌曲被选中时，一路就触发 afterChoose 和 find 事件，在 find 时候，就用到了 /lib/find.js:
const inquirer = require('inquirer')
const names = require('./names')

module.exports = (songs) => inquirer.prompt([{
  type: 'list',
  name: 'song',
  message: '共有 ' + songs.length + ' 个结果, 按下回车播放',
  choices: songs.map((i, index) => names(i, index))
}])