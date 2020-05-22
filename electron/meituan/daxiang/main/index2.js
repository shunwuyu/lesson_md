const { app, BrowserWindow } = require('electron'); //不要webpack
// const isDev = require('electron-is-dev'); //开发阶段
const path = require('path')
const handleIPC = require('./ipc');

let win
app.on('ready', () => {
  win = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: { // node 
      nodeIntegration: true
    }
  });
  // win.loadURL('http://localhost:3000')
  // next
  // if (isDev) {
    win.loadURL('http://localhost:3000')
  // } else {
    // 线上线下的区分
    // win.loadFile(path.resolve(__dirname, '../render/pages/main/index.html'))
  // }
  handleIPC()
})

