const { app, BrowserWindow } = require('electron');
const { create: createControlWindow } = require('./electron-media/node_modules/windows/control');

let win

app.on('ready', () => {
  createControlWindow();
})