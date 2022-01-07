import React from 'react';
import { Button } from '@mui/material';
import { atomsInterface } from 'src/interfaces';

function ButtonH(props: atomsInterface.buttonInterface): JSX.Element {
  const { content, variant, color } = props;
  return (
    <Button {...props} variant={variant} color={color}>
      {content}
    </Button>
  );
}

export default ButtonH;
