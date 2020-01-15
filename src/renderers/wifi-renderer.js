import {ipcRenderer} from 'electron';

const scanWifi = document.getElementById('scan-wifi');
if (scanWifi) {
  scanWifi.addEventListener('click', () => {
    ipcRenderer.send('scan-wifi');
  });
}

ipcRenderer.on('scan-wifi-reply', (event, data) => {
  document.getElementById('scan-results').innerHTML = JSON.stringify(data);
});
