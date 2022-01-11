import React, { useContext } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import ListSetting from 'src/pages/setting/list/listSetting';

function ListSettingContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const listChart = rootStore.settingStore.getListChart;

  const onDragEnd = (result: any): void => {
    if (!result.destination) {
      // eslint-disable-next-line no-useless-return
      return;
    }
    rootStore.settingStore.setListChart(listChart, result.source.index, result.destination.index);
  };

  return <ListSetting listChart={listChart} onDragEnd={onDragEnd} />;
}

export default observer(ListSettingContainer);
