import React from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { organismsInterface } from 'src/interfaces';

function LineChartH(props: organismsInterface.lineChartInterface): JSX.Element {
  const { data, dataKey, domain, lineColor = '#000000', tooltip = true, legend = false } = props;
  return (
    <ResponsiveContainer width="100%" height="90%">
      <LineChart data={data}>
        <Line type="monotone" dataKey={dataKey} stroke={lineColor} dot={false} />
        {tooltip ? <Tooltip /> : false}
        {legend ? <Legend /> : false}
        <XAxis dataKey="timeStamp" ticks={[data[data.length - 1].timeStamp]} tickCount={1} />
        <YAxis domain={domain} width={40} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartH;
