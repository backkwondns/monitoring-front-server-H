import React, { useContext } from 'react';
import SelectContainer from 'src/pages/setting/select/select.container';
import ListSettingContainer from 'src/pages/setting/list/listSetting.container';
import { Box, Divider } from '@mui/material';
import FanControlContainer from 'src/pages/setting/fan/fanControl.container';
import { MobXProviderContext } from 'mobx-react';

function Setting(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const isLogin = rootStore.appLayoutStore.getLogin;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex' }}>
        <SelectContainer />
        <Divider orientation="vertical" />
        <ListSettingContainer />
      </Box>
      {isLogin ? (
        <>
          <Divider orientation="horizontal" />
          <FanControlContainer />
        </>
      ) : null}
    </Box>
  );
}

export default Setting;
