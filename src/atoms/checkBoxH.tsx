import React from 'react';
import { Checkbox } from '@mui/material';
import { atomsInterface } from 'src/interfaces';

function CheckBoxH(props: atomsInterface.checkBoxInterface): JSX.Element {
  return <Checkbox {...props} />;
}

export default CheckBoxH;
