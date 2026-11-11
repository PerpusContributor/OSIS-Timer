const { app, BrowserWindow } = require("electron");
const path = require("path");

function StartWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 786,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadURL('http://127.0.0.1:3000')
}

app.whenReady().then(StartWindow);