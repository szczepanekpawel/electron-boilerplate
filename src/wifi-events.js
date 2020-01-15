import {ipcMain} from 'electron';
import {init, getCurrentConnections} from "node-wifi";

ipcMain.on("scan-wifi", async (event, arg) => {

  init({
    iface: null
  });

  const conn = await getCurrentConnections();
  event.sender.send('scan-wifi-reply', conn);
});
