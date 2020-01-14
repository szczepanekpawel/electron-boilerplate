const ipcRenderer = require('electron').ipcRenderer;

const btnclick = document.getElementById('loadnewwindow');

console.log('AAAAAAAAA', btnclick);

btnclick.addEventListener('click', function () {
  ipcRenderer.send('btnclick', {foo: 'bar'});
});
