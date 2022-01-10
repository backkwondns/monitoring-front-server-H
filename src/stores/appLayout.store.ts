import { makeAutoObservable } from 'mobx';
import RootStore from './root.store';

class AppLayoutStore {
  root: RootStore;

  isLoading = true;

  openSide = false;

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

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  get getLoading() {
    return this.isLoading;
  }

  resetLoading() {
    this.isLoading = true;
  }
}

export default AppLayoutStore;
