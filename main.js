const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            icon: path.join(__dirname, './sloga/eb_logo_vetorizado.png')
            
        }
    });

    win.loadFile('index.html');
    win.setIcon(path.join(__dirname, './sloga/eb_logo_vetorizado.png'));
}

app.whenReady().then(()=>{
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    })
})

app.on('window-all-closed', () => {
    if(process.plataform !== 'darwin'){
        app.quit();
    }
})