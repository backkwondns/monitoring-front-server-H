import AppLayoutStore from 'src/stores/appLayout.store';

export default class RootStore {
  appSideStore: AppLayoutStore;

  constructor() {
    this.appSideStore = new AppLayoutStore(this);
  }
}
