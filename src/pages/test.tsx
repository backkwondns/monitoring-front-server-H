import React from 'react';
import { Dashboard, Settings } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import { LineChartH, ListButtonH } from 'src/organisms';
import { ButtonH, InputTextH, PrintH } from 'src/atoms';

function Test(): JSX.Element {
  const data = [{ a: 1 }, { a: 2 }, { a: 1 }, { a: 4 }, { a: 3 }, { a: 6 }, { a: 3 }, { a: 8 }, { a: 0 }, { a: 1 }];
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
    <>
      <ListButtonH listItems={listItems} divider />
      <Divider />
      <Box sx={{ width: '50%', height: '300px', border: '1px gray solid', p: 1 }}>
        <Typography align="center">a text</Typography>
        <LineChartH data={data} dataKey="a" />
      </Box>
      <Divider />
      <ButtonH variant="outlined" color="success" text="hello!" />
      <Divider />
      <InputTextH variant="standard" color="warning" />
      <Divider />
      <PrintH variant="h3" text="heeeeeeeeello" />
    </>
  );
}

export default Test;
