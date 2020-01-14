import createWindow from "../helpers/window";
import url from "url";
import path from "path";

export class MainWindow {

  constructor() {
    this.window = createWindow("main", {
      width: 1000,
      height: 600,
      show: false
    });
  }

  loadView(view) {
    if (view) {
      this.window.loadURL(
        url.format({
          pathname: path.join(__dirname + '/views/', view),
          protocol: "file:",
          slashes: true
        })
      );

      this.window.show()
    }
  }

  openDevTools() {
    this.window.openDevTools();
  }

}
