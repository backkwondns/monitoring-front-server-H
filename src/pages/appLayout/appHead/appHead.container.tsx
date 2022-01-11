import React from 'react';
import AppHead from 'src/pages/appLayout/appHead/appHead';
import { MobXProviderContext, observer } from 'mobx-react';

function AppHeadContainer(): JSX.Element {
  const rootStore = React.useContext(MobXProviderContext);
  const openSide = rootStore.appLayoutStore.getOpen;
  const openFilter = rootStore.appLayoutStore.getFilterOpen;
  const onOpenSide = () => {
    rootStore.appLayoutStore.toggleOpen();
  };
  const onFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    rootStore.appLayoutStore.setFilterOpen(event.currentTarget);
  };

  const allList = rootStore.settingStore.getAllList;
  const selectedChart = rootStore.settingStore.getSelectedChart;
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    rootStore.settingStore.setSelectedChart(event.target.id);
  };

  return (
    <AppHead
      onOpenSide={onOpenSide}
      openSide={openSide}
      onFilter={onFilter}
      openFilter={openFilter}
      allList={allList}
      selectedChart={selectedChart}
      onChange={onChange}
    />
  );
}

export default observer(AppHeadContainer);
