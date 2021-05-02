type Channel =
  | "getUploads"
  | "getPalettes"
  | "saveGradient"
  | "getGradients"
  | "getCollections"
  | "addToCollections"
  | "copyToClipboard"
  | "browseFiles"
  | "closeImageWindow"
  | "savePalette";

type SendIPC = (channel: Channel, data?: any) => any;
type InvokeIPC = (channel: Channel, data?: any) => Promise<any>;

import electron from "electron";

const ipcRenderer = electron.ipcRenderer;

const useElectron = () => {
  const sendEvent: SendIPC = (channel, data) => ipcRenderer.send(channel, data);

  const invokeEvent: InvokeIPC = (channel, data) =>
    ipcRenderer.invoke(channel, data);

  return { sendEvent, invokeEvent };
};

export default useElectron;
