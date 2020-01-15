import './drone-events';
import './photos-events';
import './wifi-events';
import {BrowserWindow, ipcMain} from "electron";
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

ipcMain.on("page-action", async (event, arg) => {
  const sWindow = new BrowserWindow({
    width: 800,
    height: 500,
    show: true
  });

  await sWindow.loadURL('http://skapiec.pl');
});

