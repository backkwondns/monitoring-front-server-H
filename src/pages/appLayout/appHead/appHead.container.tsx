import React from 'react';
import AppHead from 'src/pages/appLayout/appHead/appHead';
import { MobXProviderContext } from 'mobx-react';

function AppHeadContainer(): JSX.Element {
  const rootStore = React.useContext(MobXProviderContext);
  const onOpenSide = () => {
    rootStore.appSideStore.toggleOpen();
  };
  return <AppHead onOpenSide={onOpenSide} />;
}

export default AppHeadContainer;
