import React from 'react';
import { Dashboard, Settings } from '@mui/icons-material';
import AppSide from 'src/pages/appLayout/appSide/appSide';
import { Box } from '@mui/material';
import { MobXProviderContext, observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

function AppSideContainer(): JSX.Element {
  const rootStore = React.useContext(MobXProviderContext);
  const openSide = rootStore.appLayoutStore.getOpen;
  const navigate = useNavigate();
  const onClick = () => {
    rootStore.appLayoutStore.toggleOpen();
  };
  const listItems = [
    {
      text: 'DashBoard',
      onClick: () => navigate('/dash'),
      icon: <Dashboard />,
    },
    {
      text: 'Setting',
      onClick: () => navigate('/setting'),
      icon: <Settings />,
    },
  ];
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <AppSide listItems={listItems} openSide={openSide} onClose={onClick} />
    </Box>
  );
}

export default observer(AppSideContainer);
