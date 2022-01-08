import React from 'react';
import DashBoard from 'src/pages/dashBoard/dashBoard';
import { axiosGet } from 'src/libs/axios';

function DashBoardContainer(): JSX.Element {
  const getStatus = () => {
    const result = axiosGet({ url: 'http://fkdnsem.iptime.org:33000/monitor/multi' }).then((res) => res.data);
    return result;
  };
  // getStatus().then((res) => {
  //   res.data;
  // });
  return <DashBoard data={getStatus()} />;
}

export default DashBoardContainer;
