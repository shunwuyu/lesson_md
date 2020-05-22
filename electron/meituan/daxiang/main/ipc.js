const {ipcMain, clipboard} = require('electron') // 

const signal = require('./signal')

module.exports = function() {
  ipcMain.handle('login', async () => {
    let code = Math.floor(Math.random()*(999999 - 100000)) + 100000
    return code
  })

  ipcMain.on('control', async (e, remote) => {
    // 这里是跟服务端的交互，成功后我们会唤起面板
    console.log(e, remote);
    signal.send('control', {remote})
  })

  ipcMain.on('control', async (e, remote) => {
    // 这里是跟服务端的交互，成功后我们会唤起面板
    console.log(remote, '------------');
    // signal.send('control', {remote})
  })

  ipcMain.on('share-to-wechat', async (e, code) => {
    if(code) {
        clipboard.writeText(code.toString())
    }
  })
}