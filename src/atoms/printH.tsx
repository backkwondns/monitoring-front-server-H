import React from 'react';
import { Typography } from '@mui/material';
import { atomsInterface } from 'src/interfaces';

function PrintH(props: atomsInterface.printInterface): JSX.Element {
  const { text } = props;
  return <Typography {...props}>{text}</Typography>;
}

export default PrintH;
