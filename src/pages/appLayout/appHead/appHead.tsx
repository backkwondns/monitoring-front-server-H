import React from 'react';
import { Box } from '@mui/material';
import { ButtonH } from 'src/atoms';
import { MoreHoriz } from '@mui/icons-material';
import { appLayoutInterface } from 'src/interfaces';

function AppHead(props: appLayoutInterface.appHeadInterface): JSX.Element {
  const { onOpenSide } = props;
  return (
    <Box sx={{ height: '36px', display: 'flex', border: '1px solid gray', zIndex: 1000 }}>
      <ButtonH content={<MoreHoriz />} onClick={onOpenSide} />
    </Box>
  );
}

export default AppHead;
