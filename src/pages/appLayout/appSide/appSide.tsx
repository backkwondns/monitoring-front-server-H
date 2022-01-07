import React from 'react';
import { Box, Collapse, Divider } from '@mui/material';
import { ListButtonH } from 'src/organisms';
import { ButtonH } from 'src/atoms';
import { Close } from '@mui/icons-material';
import { appLayoutInterface } from 'src/interfaces';

function AppSide(props: appLayoutInterface.appSideInterface): JSX.Element {
  const { listItems, openSide, onClose } = props;
  return (
    <Collapse in={openSide} orientation="horizontal" timeout={200}>
      <Box
        sx={{
          width: { xs: '100vw', sm: '330px' },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRight: 'solid 1px gray',
          backgroundColor: '#E8E4F7',
          zIndex: 100000,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <ButtonH content={<Close />} onClick={onClose} />
        </Box>
        <Divider />
        <Box sx={{ display: 'flex' }}>
          <ListButtonH sxList={{ width: '100%', p: 0 }} listItems={listItems} divider />
        </Box>
      </Box>
    </Collapse>
  );
}

export default AppSide;
