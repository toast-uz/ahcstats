import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, CartesianGrid, Tooltip } from 'recharts';
import AHCDataList from '../data/ahc-stats';

const PerfHistChart = () => (
  <div className="container">
    <LineChart width={700} height={350}
      margin={{top: 50, right: 20, left: 20, bottom: 50}}
      data={AHCDataList}>
      <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="1.2rem">Your Perf History</tspan>
      </text>
      <CartesianGrid />
      <XAxis dataKey="ARate" />
      <YAxis domain={[0, 3600]} tickCount={10}
        label={{ value: 'Performance', offset: 10, position: 'top', textAnchor: 'middle' }} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Line type="monotone" dataKey="performance" stroke="#8884d8" />
      <Label value="Pages of my website" offset={0} position="top" />
    </LineChart>
  </div>
);

export default PerfHistChart;