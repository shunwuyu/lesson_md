const { app, BrowserWindow } = require('electron');

let win

app.on('ready', () => {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile("index.html")
})