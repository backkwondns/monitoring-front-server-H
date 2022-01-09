import React, { useEffect } from 'react';
import DashBoard from 'src/pages/dashBoard/dashBoard';
import { axiosGet } from 'src/libs/axios';
import { MobXProviderContext, observer } from 'mobx-react';
import { Box, CircularProgress } from '@mui/material';
import { dashBoardInterface } from 'src/interfaces';

function DashBoardContainer(): JSX.Element {
  const rootStore = React.useContext(MobXProviderContext);
  const isLoading = rootStore.appLayoutStore.getLoading;
  const colorMap: dashBoardInterface.colorMap = rootStore.dashBoardStore.getColor;
  const data: dashBoardInterface.data = rootStore.dashBoardStore.getInfo;
  const domainMap: dashBoardInterface.domainMap = {
    CPU: [0, 2],
    MEM: [0, 4158],
    FAN: [0, 100],
    TEMP: [0, 100],
  };

  useEffect(() => {
    axiosGet({ url: 'http://fkdnsem.iptime.org:34000/monitor/multi' }).then((res) =>
      rootStore.dashBoardStore.setTotalInfo(res.data),
    );
  }, []);

  return isLoading ? (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <CircularProgress color="secondary" />
    </Box>
  ) : (
    <DashBoard data={data} colorMap={colorMap} domainMap={domainMap} />
  );
}

export default observer(DashBoardContainer);
