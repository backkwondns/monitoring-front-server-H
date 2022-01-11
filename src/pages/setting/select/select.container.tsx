import * as React from 'react';
import { useContext } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import Select from './select';

function SelectContainer() {
  const rootStore = useContext(MobXProviderContext);
  const selectedChart = rootStore.settingStore.getSelectedChart;
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    rootStore.settingStore.setSelectedChart(event.target.id);
  };

  const allList = rootStore.settingStore.getAllList;
  return <Select allList={allList} selectedChart={selectedChart} onChange={onChange} />;
}

export default observer(SelectContainer);
