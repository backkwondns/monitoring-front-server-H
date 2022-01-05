import React from 'react';
import { ListItemText } from '@mui/material';
import { atomsInterface } from 'src/interfaces';

function ListItemTextH(props: atomsInterface.listItemTextInterface): JSX.Element {
  const { text } = props;
  return <ListItemText primary={text} {...props} />;
}

export default ListItemTextH;
