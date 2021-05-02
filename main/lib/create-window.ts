import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";

const createWindow = (options: BrowserWindowConstructorOptions) => {
  const { width, height } = options;

  const browserOptions: BrowserWindowConstructorOptions = {
    width,
    height,
    titleBarStyle: "hidden",
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  };

  let window: BrowserWindow | null;

  window = new BrowserWindow(browserOptions);

  window.on("close", () => (window = null));

  return window;
};

export default createWindow;
