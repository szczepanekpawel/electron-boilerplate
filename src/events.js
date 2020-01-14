import {ipcMain} from 'electron';
import {mainWindow} from './background';

ipcMain.on("btnclick", function (event, arg) {
  const facebookURL = "https://www.facebook.com";
  mainWindow.loadURL(facebookURL);
  // mainWindow.show();

  event.sender.send("btnclick-task-finished", "yes");
});
