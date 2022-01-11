import { makeAutoObservable, toJS } from 'mobx';
import { dashBoardInterface } from 'src/interfaces';
import appLayoutStore from 'src/stores/appLayout.store';
import RootStore from './root.store';

class dashBoardStore {
  root: RootStore;

  appLayout: appLayoutStore;

  totalInfo: dashBoardInterface.data = [];

  colorMap = { CPU: '#33c9dc', MEM: '#a2cf6e', FAN: '#3f51b5', TEMP: '#ef5350' };

  currentFan = '0';

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.appLayout = this.root.appLayoutStore;
  }

  setTotalInfo(data: dashBoardInterface.data) {
    data.forEach((index) => {
      // eslint-disable-next-line no-param-reassign
      index.FAN_Speed = (Number(index.FAN_Speed) / 2.5).toString();
      // eslint-disable-next-line no-param-reassign
      index.timeStamp = new Date(Number(index.timeStamp)).toLocaleString();
    });
    this.currentFan = data[0].FAN_Speed;
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
