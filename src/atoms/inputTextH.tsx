import React from 'react';
import { TextField } from '@mui/material';
import { atomsInterface } from 'src/interfaces';

function InputTextH(props: atomsInterface.inputTextInterface): JSX.Element {
  return <TextField {...props} />;
}

export default InputTextH;
