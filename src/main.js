const { app, BrowserWindow } = require('electron');

function createWindow () {
  let win = new BrowserWindow({
    width: 1400,
    minWidth: 300,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  
  win.setMenu(null);
  win.loadFile('./src/index.html');
}

app.on('ready', createWindow);