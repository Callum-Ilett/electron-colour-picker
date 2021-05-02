import { app, BrowserWindow, clipboard, dialog, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow, store } from "./lib";
import { v4 as uuidv4 } from "uuid";
import * as path from "path";
import * as fs from "fs";

const isProd: boolean = process.env.NODE_ENV === "production";

let mainWindow: BrowserWindow | null;
let imageWindow: BrowserWindow | null;

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  mainWindow = createWindow({
    width: 652,
    height: 520,
  });

  if (isProd) {
    await mainWindow.loadURL("app://./trending.html");
  } else {
    const port = process.argv[2];

    await mainWindow.loadURL(`http://localhost:${port}/trending`);
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.handle("closeImageWindow", async () => {
  imageWindow?.close();
  if (isProd) {
    await mainWindow?.loadURL("app://./collections.html");
  } else {
    const port = process.argv[2];
    await mainWindow?.loadURL(`http://localhost:${port}/collections`);
  }
});

ipcMain.handle("copyToClipboard", (_event, data: string) =>
  clipboard.writeText(data)
);

ipcMain.handle("getCollections", () => store.get("collections"));
ipcMain.handle("getGradients", () => store.get("gradients"));
ipcMain.handle("getUploads", () => store.get("uploads"));
ipcMain.handle("getPalettes", () => store.get("palettes"));

ipcMain.handle("savePalette", (_event, data: Palette) => {
  const id = uuidv4();
  const newPalette = { id, colours: data };
  const palettes = store.get("palettes") as Palettes;

  store.set("palettes", [...palettes, newPalette]);
});

ipcMain.handle("saveGradient", (_event, data: Gradient) => {
  const id = uuidv4();
  const newGradient = { ...data, id };
  const gradients = store.get("gradients") as Gradients;

  store.set("gradients", [...gradients, newGradient]);
});

ipcMain.handle("addToCollections", (_event, collection: Collection) => {
  const { type, data } = collection;
  const id = uuidv4();

  const collections = store.get("collections") as Collections;

  const name = `collection-${collections.length + 1}`;

  const newCollection = { name, id, type, data };

  store.set("collections", [...collections, newCollection]);
});

ipcMain.handle("browseFiles", async () => {
  const id = uuidv4();

  const imageOptions: Electron.OpenDialogOptions = {
    properties: ["openFile"],
    filters: [{ name: "Images", extensions: ["png", "jpg", "jpeg"] }],
  };

  const { canceled, filePaths } = await dialog.showOpenDialog(imageOptions);

  if (canceled) return;

  const filePath = filePaths[0];
  const fileExtension = path.extname(filePath);
  const fileName = id + fileExtension;

  const base64 = fs.readFileSync(filePath).toString("base64");
  const src = `data:image/png;base64,${base64}`;

  const uploads = store.get("uploads") as Uploads;

  const upload: Upload = { id, fileName, src };
  store.set("uploads", [...uploads, upload]);

  imageWindow = createWindow({
    width: 360,
    height: 446,
  });

  if (isProd) {
    await imageWindow.loadURL("app://./import/[id].html");
  } else {
    const port = process.argv[2];
    await imageWindow.loadURL(`http://localhost:${port}/import/${id}`);
  }
});
