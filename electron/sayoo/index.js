const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

let win

ipcMain.on('greet', (event, args) => {
  console.log(args)

  event.sender.send('greet', {
    message: 'hi renderer ~'
  })
})

const createWindow = () => {
  win = new BrowserWindow({
    width: 960,
    height: 600,
    minWidth: 830,
    minHeight: 500,
    backgroundColor: '#f8f8f8'
  })

  win.loadURL(`file://${__dirname}/main.html`)

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})