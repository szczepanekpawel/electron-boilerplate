import {ipcMain} from 'electron';
import {init, scan} from "node-wifi";

ipcMain.on("scan-wifi", async (event, arg) => {

  init({
    iface: null
  });

  const conn = await scan();
  event.sender.send('scan-wifi-reply', conn);
});
