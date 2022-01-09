import React from 'react';
import { Box } from '@mui/material';
import { ButtonH } from 'src/atoms';
import { FilterAlt, Dehaze } from '@mui/icons-material';
import { appLayoutInterface } from 'src/interfaces';

function AppHead(props: appLayoutInterface.appHeadInterface): JSX.Element {
  const { onOpenSide, openSide } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: `${openSide ? 'row-reverse' : 'column'}`,
        flexWrap: 'wrap',
        alignContent: 'space-between',
        height: '36px',
        borderBottom: '1px solid gray',
      }}
    >
      {openSide ? null : <ButtonH content={<Dehaze color="error" />} onClick={onOpenSide} />}
      <ButtonH content={<FilterAlt color="secondary" />} />
    </Box>
  );
}

export default AppHead;
