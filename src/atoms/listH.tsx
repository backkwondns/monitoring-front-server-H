import React from 'react';
import { List } from '@mui/material';
import { atomsInterface } from 'src/interfaces';

function ListH(props: atomsInterface.childrenInterface): JSX.Element {
  const { children } = props;
  return <List>{children}</List>;
}

export default ListH;
