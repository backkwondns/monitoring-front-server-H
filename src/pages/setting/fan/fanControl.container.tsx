import React from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import FanControl from 'src/pages/setting/fan/fanControl';

function FanControlContainer(): JSX.Element {
  const rootStore = React.useContext(MobXProviderContext);
  const openFanConfig = rootStore.settingStore.getOpenFanConfig;
  const onFanConfig = (event: React.MouseEvent<HTMLButtonElement>) => {
    rootStore.settingStore.setOpenFanConfig(event.currentTarget);
  };

  const fanControl = rootStore.settingStore.getFanControl;
  const onMinus = () => {
    if (Number(fanControl) - 5 < 0) {
      rootStore.settingStore.setFanControl('0');
    } else {
      rootStore.settingStore.setFanControl((Number(fanControl) - 5).toString());
    }
  };

  const onPlus = () => {
    if (Number(fanControl) + 5 > 100) {
      rootStore.settingStore.setFanControl('100');
    } else {
      rootStore.settingStore.setFanControl((Number(fanControl) + 5).toString());
    }
  };
  const onChangeCommitted = (event: React.SyntheticEvent | Event, value: number | number[]) => {
    rootStore.settingStore.setFanControl(value.toString());
  };

  return (
    <FanControl
      fanControl={fanControl}
      openFanConfig={openFanConfig}
      onMinus={onMinus}
      onPlus={onPlus}
      onFanConfig={onFanConfig}
      onChangeCommitted={onChangeCommitted}
    />
  );
}

export default observer(FanControlContainer);
