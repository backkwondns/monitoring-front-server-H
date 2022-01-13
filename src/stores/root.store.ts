import AppLayoutStore from 'src/stores/appLayout.store';
import DashBoardStore from 'src/stores/dashBoard.store';
import { makeAutoObservable } from 'mobx';
import SettingStore from './setting.store';

export default class RootStore {
  appLayoutStore: AppLayoutStore;

  dashBoardStore: DashBoardStore;

  settingStore: SettingStore;

  SERVER: string | undefined;

  SERVER_PORT: string | undefined;

  constructor() {
    this.appLayoutStore = new AppLayoutStore(this);
    this.dashBoardStore = new DashBoardStore(this);
    this.settingStore = new SettingStore(this);
    this.SERVER = process.env.REACT_APP_SERVER;
    this.SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
  }
}
