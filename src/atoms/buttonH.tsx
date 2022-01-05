import React from 'react';
import { Button } from '@mui/material';
import { atomsInterface } from 'src/interfaces';

function ButtonH(props: atomsInterface.buttonInterface): JSX.Element {
  const { text, variant, color } = props;
  return (
    <Button {...props} variant={variant} color={color}>
      {text}
    </Button>
  );
}

export default ButtonH;
