import AppLayoutStore from 'src/stores/appLayout.store';
import DashBoardStore from 'src/stores/dashBoard.store';

export default class RootStore {
  appLayoutStore: AppLayoutStore;

  dashBoardStore: DashBoardStore;

  constructor() {
    this.appLayoutStore = new AppLayoutStore(this);
    this.dashBoardStore = new DashBoardStore(this);
  }
}
