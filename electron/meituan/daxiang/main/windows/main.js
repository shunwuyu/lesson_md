const {BrowserWindow} = require('electron')

let win
let willQuitApp = false
function create () {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.on('close', (e) => {
    if(willQuitApp) {
        win = null
    } else {
        e.preventDefault()
        win.hide()
    }
  })


  win.loadURL('http://localhost:3000')
}

function send(channel, ...args) {
  win.webContents.send(channel, ...args)
}

function show() {
  win.show()
}

function close() {
  willQuitApp = true
  win.close()
}

module.exports = {create, send, show, close}