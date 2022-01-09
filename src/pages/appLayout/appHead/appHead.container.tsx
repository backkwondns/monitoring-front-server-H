import React from 'react';
import AppHead from 'src/pages/appLayout/appHead/appHead';
import { MobXProviderContext, observer } from 'mobx-react';

function AppHeadContainer(): JSX.Element {
  const rootStore = React.useContext(MobXProviderContext);
  const openSide = rootStore.appLayoutStore.getOpen;
  const onOpenSide = () => {
    rootStore.appLayoutStore.toggleOpen();
  };
  return <AppHead onOpenSide={onOpenSide} openSide={openSide} />;
}

export default observer(AppHeadContainer);
