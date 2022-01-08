import { makeAutoObservable } from 'mobx';
import RootStore from './root.store';

class AppLayoutStore {
  root: RootStore;

  openSide = true;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  toggleOpen() {
    this.openSide = !this.openSide;
  }

  get getOpen() {
    return this.openSide;
  }
}

export default AppLayoutStore;
