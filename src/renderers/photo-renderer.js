import {ipcRenderer} from 'electron';

const takeAPhotoButton = document.getElementById('take-a-photo');
if (takeAPhotoButton) {
  takeAPhotoButton.addEventListener('click', () => {
    ipcRenderer.send('take-a-photo');
  });
}
