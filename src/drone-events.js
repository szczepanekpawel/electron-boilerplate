import {ipcMain} from 'electron';

import {connect as droidConnect} from "tello-drone";

let drone;

ipcMain.on("drone-connect", async (event, arg) => {
  drone = droidConnect();
  drone.on("connection", async () => {
    event.sender.send('drone-connect-reply', {connected: true});
  });
});

ipcMain.on("drone-startup", async (event, arg) => {
  await drone.send("takeoff");
  event.sender.send('drone-startup', 'flying');
});

ipcMain.on("drone-land", async (event, arg) => {
  await drone.send("land");
  event.sender.send('drone-land', 'landing');
});


ipcMain.on("drone-left", async (event, arg) => {
  await drone.send("left", {value: 20});
});

ipcMain.on("drone-right", async (event, arg) => {
  await drone.send("right", {value: 20});
});

ipcMain.on("drone-forward", async (event, arg) => {
  await drone.send("forward", {value: 20});
});

ipcMain.on("drone-backward", async (event, arg) => {
  await drone.send("back", {value: 20});
});

ipcMain.on("drone-up", async (event, arg) => {
  await drone.send("up", {value: 20});
});

ipcMain.on("drone-down", async (event, arg) => {
  await drone.send("down", {value: 20});
});
