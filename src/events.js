import {ipcMain, ipcRenderer} from 'electron';
import {init, scan} from 'node-wifi';

ipcMain.on("btnclick", (event, arg) => {

  console.log(event);
  event.sender.send('foo', 'data-aaa');

  // init({iface: null});
  // scan().then((data) => {
  // })

});
