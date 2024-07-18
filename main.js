// Importing modules
const { app, BrowserWindow } = require('electron')

// Writing a reusable function to instantiate windows
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

// Calling your function when the app is ready
app.whenReady().then(() => {
    createWindow()

    // Open a window if none are open (macOS)
    /* app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    }) */
})

// Quit the app when all windows are closed (Windows & Linux)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
