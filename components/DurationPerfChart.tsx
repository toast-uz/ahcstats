import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Label, CartesianGrid, Tooltip } from 'recharts';
import { myContestHist } from '../lib/ahc-stats';

const DurationPerfChart = () => (
  <div className="container">
    <ScatterChart width={700} height={350}
      margin={{top: 50, right: 20, left: 20, bottom: 50}}>
      <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="1.2rem">Contest Duration vs Your Perf</tspan>
      </text>
      <CartesianGrid />
      <XAxis type="number" dataKey="duration" name="Contest Duration"
        ticks={[1, 2, 5, 10, 20, 50, 100, 200, 500]} domain={[1, 500]} scale="log">
        <Label value="Contest Duration (hours)" offset={0} position="bottom" />
      </XAxis>
      <YAxis type="number" dataKey="perf" name="Performance"
        label={{ value: 'Performance', offset: 10, position: 'top', textAnchor: 'middle' }}
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} domain={[0, 3200]} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="Contest Duration vs Your Performance" data={myContestHist} fill="red" />
      <Label value="Pages of my website" offset={0} position="top" />
    </ScatterChart>
  </div>
);

export default DurationPerfChart;