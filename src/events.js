import {ipcMain, ipcRenderer} from 'electron';
import {print} from 'electron-print';
import {VideoCapture} from 'camera-capture'
import {writeFileSync} from 'fs';

ipcMain.on("btnclick", async (event, arg) => {

  console.log(event);
  event.sender.send('foo', 'data-aaa');


  const camera = new VideoCapture({
    mime: 'image/jpeg'
  });

  await camera.initialize();


  let f = await camera.readFrame();
  const filename = __dirname + '/tmp1.png';
  await writeFileSync(filename, f.data);
  await camera.stop();


  print(filename, f.width, f.height);


  // init({iface: null});
  // scan().then((data) => {
  // })

});
