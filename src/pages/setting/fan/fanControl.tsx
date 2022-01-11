import React from 'react';
import { settingInterface } from 'src/interfaces';
import { Box, ButtonGroup, Popper, Slider } from '@mui/material';
import { ButtonH, PrintH } from 'src/atoms';
import { Add, Remove } from '@mui/icons-material';

function FanControl(props: settingInterface.fanControlInterface): JSX.Element {
  const { fanControl, openFanConfig, onMinus, onPlus, onFanConfig, onChangeCommitted } = props;
  const open = Boolean(openFanConfig);
  const id = open ? 'simple-popper' : undefined;
  return (
    <Box sx={{ p: 1, textAlign: 'center' }}>
      <PrintH text="Fan Speed Control" />
      <ButtonGroup>
        <ButtonH content={<Remove />} onClick={onMinus} />
        <ButtonH content={fanControl} onClick={onFanConfig} />
        <ButtonH content={<Add />} onClick={onPlus} />
      </ButtonGroup>
      <Popper id={id} open={open} anchorEl={openFanConfig}>
        <Box sx={{ border: 1, p: 1, backgroundColor: 'background.paper', width: '220px', borderRadius: '10px' }}>
          <Slider
            value={Number(fanControl)}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
            onChangeCommitted={onChangeCommitted}
          />
        </Box>
      </Popper>
    </Box>
  );
}

export default FanControl;
