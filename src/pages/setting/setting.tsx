import React from 'react';
import SelectContainer from 'src/pages/setting/select/select.container';
import ListSettingContainer from 'src/pages/setting/list/listSetting.container';
import { Box, Divider } from '@mui/material';
import FanControlContainer from 'src/pages/setting/fan/fanControl.container';

function Setting(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex' }}>
        <SelectContainer />
        <Divider orientation="vertical" />
        <ListSettingContainer />
      </Box>
      <Divider orientation="horizontal" />
      <FanControlContainer />
    </Box>
  );
}

export default Setting;
