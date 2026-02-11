const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 650,
    show: false,
    autoHideMenuBar: true,
    backgroundColor: "#0b1220",
    icon: path.join(__dirname, "icon.ico"),
    webPreferences: {
      contextIsolation: true
    }
  });

  win.maximize();
  win.show();

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
