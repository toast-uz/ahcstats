import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Label, CartesianGrid, Tooltip } from 'recharts';
import AHCDataList from '../data/ahc-stats';

const DurationPerfChart = () => (
  <div className="container">
    <ScatterChart width={700} height={350}
      margin={{top: 50, right: 20, left: 20, bottom: 50}}>
      <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="1.2rem">Contest Duration vs Your Perf</tspan>
      </text>
      <CartesianGrid />
      <XAxis type="number" dataKey="ARate" name="Contest Duration">
        <Label value="Contest Duration" offset={0} position="bottom" />
      </XAxis>
      <YAxis type="number" dataKey="performance" name="Performance"  domain={[0, 3600]} tickCount={10}
        label={{ value: 'Performance', offset: 10, position: 'top', textAnchor: 'middle' }} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="Contest Duration vs Your Performance" data={AHCDataList} fill="#8884d8" />
      <Label value="Pages of my website" offset={0} position="top" />
    </ScatterChart>
  </div>
);

export default DurationPerfChart;