import { makeAutoObservable } from 'mobx';
import RootStore from './root.store';

class AppLayoutStore {
  root: RootStore;

  isLoading = true;

  openSide = false;

  openFilter = false;

  openDialog = false;

  login = false;

  id = '';

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

  get getFilterOpen() {
    return this.openFilter;
  }

  setFilterOpen(clicked: any) {
    this.openFilter = this.openFilter ? null : clicked;
  }

  get getOpenDialog() {
    return this.openDialog;
  }

  toggleOpenDialog() {
    this.openDialog = !this.openDialog;
  }

  get getLogin() {
    return this.login;
  }

  toggleLogin() {
    this.login = true;
  }

  get getId() {
    return this.id;
  }

  setId(id: string) {
    this.id = id;
  }
}

export default AppLayoutStore;
