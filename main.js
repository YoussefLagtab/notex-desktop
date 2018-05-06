const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

let createWindow = () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'app/index.html'),
      protocol: 'file:',
      slashes: true
    })
  )

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  process.platform !== 'darwin' && app.quit()
})

app.on('activate', () => {
  mainWindow === null && createWindow()
})
