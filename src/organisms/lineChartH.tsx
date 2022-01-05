import React from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import { organismsInterface } from 'src/interfaces';

function LineChartH(props: organismsInterface.lineChartInterface): JSX.Element {
  const { data, dataKey, lineColor = '#000000', tooltip = true, legend = true } = props;
  return (
    <ResponsiveContainer width="100%" height="90%">
      <LineChart data={data}>
        <Line type="monotone" dataKey={dataKey} stroke={lineColor} />
        {tooltip ? <Tooltip /> : false}
        {legend ? <Legend /> : false}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartH;
