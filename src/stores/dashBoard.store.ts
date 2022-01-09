import { makeAutoObservable, toJS } from 'mobx';
import { dashBoardInterface } from 'src/interfaces';
import appLayoutStore from 'src/stores/appLayout.store';
import RootStore from './root.store';

class dashBoardStore {
  root: RootStore;

  appLayout: appLayoutStore;

  totalInfo: dashBoardInterface.data = [];

  colorMap = { CPU: '#33c9dc', MEM: '#a2cf6e', FAN: '#3f51b5', TEMP: '#ef5350' };

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.appLayout = this.root.appLayoutStore;
  }

  setTotalInfo(data: dashBoardInterface.data) {
    data.forEach((index) => {
      // eslint-disable-next-line no-param-reassign
      index.timeStamp = new Date(Number(index.timeStamp)).toLocaleString();
    });
    this.totalInfo = data.reverse();
    this.appLayout.toggleLoading();
  }

  get getInfo(): dashBoardInterface.data {
    return toJS(this.totalInfo);
  }

  get getColor(): dashBoardInterface.colorMap {
    return toJS(this.colorMap);
  }
}

export default dashBoardStore;
