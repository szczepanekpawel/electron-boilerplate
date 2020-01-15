import {ipcRenderer} from 'electron';

//MAIN MENU ACTIONS
document.getElementById('fly-action').addEventListener('click', () => {
  ipcRenderer.send('fly-action');
});

document.getElementById('photo-action').addEventListener('click', () => {
  ipcRenderer.send('photo-action');
});

document.getElementById('wifi-action').addEventListener('click', () => {
  ipcRenderer.send('wifi-action');
});

document.getElementById('portal-action').addEventListener('click', () => {
  ipcRenderer.send('page-action');
});

