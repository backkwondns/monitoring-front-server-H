import React from 'react';
import { Dashboard, Settings } from '@mui/icons-material';
import AppSide from 'src/pages/appLayout/appSide/appSide';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { MobXProviderContext, observer } from 'mobx-react';

function AppSideContainer(): JSX.Element {
  const rootStore = React.useContext(MobXProviderContext);
  const openSide = rootStore.appSideStore.getOpen;
  const onClick = () => {
    rootStore.appSideStore.toggleOpen();
  };
  const listItems = [
    {
      text: 'DashBoard',
      onClick: () => false,
      icon: <Dashboard />,
    },
    {
      text: 'Setting',
      onClick: () => false,
      icon: <Settings />,
    },
  ];
  return (
    <Box sx={{ display: 'flex', position: 'absolute', left: 0, top: 0 }}>
      <AppSide listItems={listItems} openSide={openSide} onClose={onClick} />
      <Box sx={{ overflow: 'auto', height: '100vh' }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default observer(AppSideContainer);
