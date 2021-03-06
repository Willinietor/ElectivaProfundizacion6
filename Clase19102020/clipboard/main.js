const {app, BrowserWindow, clipboard} = require('electron')

let mainWindow

function createWindow () {

  clipboard.writeText('Hello from the main process!')

  mainWindow = new BrowserWindow({
    width: 1000, height: 800,
    webPreferences: { nodeIntegration: true }
  })

  mainWindow.loadFile('index.html')

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed',  () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
