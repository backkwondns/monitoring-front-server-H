import { Box } from '@mui/material';
import React from 'react';
import { dashBoardInterface } from 'src/interfaces';
import { LineChartH } from 'src/organisms';

function DashBoard(props: dashBoardInterface): JSX.Element {
  const { data } = props;
  console.log(data);
  return <Box>{/* <LineChartH data={data} dataKey={} /> */}</Box>;
}

export default DashBoard;
