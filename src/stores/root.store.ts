import AppLayoutStore from 'src/stores/appLayout.store';
import DashBoardStore from 'src/stores/dashBoard.store';
import SettingStore from './setting.store';

export default class RootStore {
  appLayoutStore: AppLayoutStore;

  dashBoardStore: DashBoardStore;

  settingStore: SettingStore;

  constructor() {
    this.appLayoutStore = new AppLayoutStore(this);
    this.dashBoardStore = new DashBoardStore(this);
    this.settingStore = new SettingStore(this);
  }
}
