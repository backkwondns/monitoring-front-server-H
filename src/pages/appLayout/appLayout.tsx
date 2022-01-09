import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeadContainer from 'src/pages/appLayout/appHead/appHead.container';
import AppSideContainer from 'src/pages/appLayout/appSide/appSide.container';

function AppLayout(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
      <AppSideContainer />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          overflow: 'auto',
          transition: 'padding 150ms',
        }}
      >
        <AppHeadContainer />
        <Outlet />
      </Box>
    </Box>
  );
}

export default AppLayout;
