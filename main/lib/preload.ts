import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  sendEvent: (channel: string, data?: any) =>
    ipcRenderer.sendSync(channel, data),

  receive: (channel: string, callback: any) =>
    ipcRenderer.on(channel, (event, ...args) => callback(...args)),

  invokeEvent: (channel: string, data?: any) => {
    return ipcRenderer.invoke(channel, data);
  },
});
