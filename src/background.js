import {app, Menu} from "electron";
import {editMenuTemplate} from "./menu/edit_menu_template";
import './events';
import env from "env";
import {MainWindow} from "./modules/window";

export let mainWindow;

app.on("ready", () => {
  Menu.setApplicationMenu(Menu.buildFromTemplate([editMenuTemplate]));
  mainWindow = new MainWindow();
  mainWindow.loadView('app.html');


  if (env.name === "development") {
    mainWindow.openDevTools();
  }
});

app.on("window-all-closed", () => {
  app.quit();
});
