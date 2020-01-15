import {ipcRenderer} from 'electron';


//DRONE ACTIONS
const startupButton = document.getElementById('startup');
if (startupButton) {
  startupButton.addEventListener('click', () => {
    ipcRenderer.send('drone-startup');
  });
}

const landButton = document.getElementById('land');
if (landButton) {
  landButton.addEventListener('click', () => {
    ipcRenderer.send('drone-land');
  });
}

const forwardButton = document.getElementById('go-forward');
if (forwardButton) {
  forwardButton.addEventListener('click', () => {
    ipcRenderer.send('drone-forward');
  });
}

const backwardButton = document.getElementById('go-backward');
if (backwardButton) {
  backwardButton.addEventListener('click', () => {
    ipcRenderer.send('drone-backward');
  });
}

const leftButton = document.getElementById('go-left');
if (leftButton) {
  leftButton.addEventListener('click', () => {
    ipcRenderer.send('drone-left');
  });
}

const rightButton = document.getElementById('go-right');
if (rightButton) {
  rightButton.addEventListener('click', () => {
    ipcRenderer.send('drone-right');
  });
}

const upButton = document.getElementById('go-up');
if (upButton) {
  upButton.addEventListener('click', () => {
    ipcRenderer.send('drone-up');
  });
}

const downButton = document.getElementById('go-down');
if (downButton) {
  downButton.addEventListener('click', () => {
    ipcRenderer.send('drone-down');
  });
}


const connectButton = document.getElementById('drone-connect');
if (connectButton) {
  connectButton.addEventListener('click', () => {
    ipcRenderer.send('drone-connect');
  });
}


ipcRenderer.on('drone-connect-reply', (d, data) => {
  document.getElementById('drone-dot-status').setAttribute('src', '../images/dot-green.png');
});
