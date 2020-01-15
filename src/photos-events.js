import {ipcMain} from 'electron';
import {VideoCapture} from "camera-capture";
import {writeFileSync} from "fs";
import {Printer} from "./modules/printer";

ipcMain.on("take-a-photo", async (event, arg) => {
  const camera = new VideoCapture({
    mime: 'image/jpeg'
  });

  await camera.initialize();
  let f = await camera.readFrame();
  const filename = __dirname + '/tmp1.png';
  await writeFileSync(filename, f.data);
  await camera.stop();

  const p = new Printer();
  await p.print(filename);
});
