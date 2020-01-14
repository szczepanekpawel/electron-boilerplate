import {ipcRenderer} from 'electron';

const btnclick = document.getElementById('loadnewwindow');

btnclick.addEventListener('click', function () {
  ipcRenderer.send('btnclick', {foo: 'bar'});
});


ipcRenderer.on('foo', (d, data) => {
  console.log(d, data);
});
