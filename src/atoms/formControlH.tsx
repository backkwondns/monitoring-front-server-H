import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { atomsInterface } from 'src/interfaces';

function FormControlH(props: atomsInterface.formControlInterface): JSX.Element {
  return <FormControlLabel {...props} />;
}

export default FormControlH;
