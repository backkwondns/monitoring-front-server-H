import React from 'react';
import { Dashboard, Settings } from '@mui/icons-material';
import { Box, Divider } from '@mui/material';
import { ListButtonH } from 'src/organisms';
import { ButtonH, InputTextH, PrintH } from 'src/atoms';

function Test(): JSX.Element {
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
    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%', alignContent: 'center' }}>
      <ListButtonH listItems={listItems} divider />
      <Divider />
      <Divider />
      <ButtonH variant="outlined" color="success" content="hello!" />
      <Divider />
      <InputTextH variant="standard" color="warning" />
      <Divider />
      <PrintH variant="h3" text="heeeeeeeeello" />
    </Box>
  );
}

export default Test;
