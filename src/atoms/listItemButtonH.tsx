import React from 'react';
import { ListItemButton } from '@mui/material';
import { atomsInterface } from 'src/interfaces';

function ListItemButtonH(props: atomsInterface.listItemButtonInterface): JSX.Element {
  const { children } = props;
  return <ListItemButton {...props}>{children}</ListItemButton>;
}

export default ListItemButtonH;
