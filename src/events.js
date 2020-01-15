import './drone-events';
import './photos-events';
import './wifi-events';
import {ipcMain} from "electron";
import {mainWindow} from "./background";


ipcMain.on("photo-action", async (event, arg) => {
  mainWindow.loadView('photo.html');
});

ipcMain.on("fly-action", async (event, arg) => {
  mainWindow.loadView('fly.html');
});

ipcMain.on("wifi-action", async (event, arg) => {
  mainWindow.loadView('wifi.html');
});

