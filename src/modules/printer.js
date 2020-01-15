import {BrowserWindow} from 'electron';

export class Printer {

  async print(file) {
    let win = new BrowserWindow({show: false});
    await win.loadFile(file);
    await win.webContents.print({silent: true});
    win.close();
  }

}
