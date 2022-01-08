import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeadContainer from 'src/pages/appLayout/appHead/appHead.container';
import AppSideContainer from 'src/pages/appLayout/appSide/appSide.container';

function AppLayout(): JSX.Element {
  return (
    <>
      <AppHeadContainer />
      <AppSideContainer />
      <Outlet />
    </>
  );
}

export default AppLayout;
