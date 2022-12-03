import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Label, CartesianGrid, Tooltip } from 'recharts';
import { UserResult } from '../types';

type Props = { userName: string, myContestHist: UserResult[]}

const DurationPerfChart = ({ userName, myContestHist }: Props) => (
  <div className="container">
    <ScatterChart width={700} height={350}
      margin={{top: 50, right: 20, left: 20, bottom: 50}}>
      <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="1.2rem">Contest Duration vs {userName}&apos;s Perf</tspan>
      </text>
      <CartesianGrid />
      <XAxis type="number" dataKey="duration" name="Contest Duration"
        ticks={[1, 2, 5, 10, 20, 50, 100, 200, 500]} domain={[1, 500]} scale="log">
        <Label value="Contest Duration (hours)" position="bottom" />
      </XAxis>
      <YAxis type="number" dataKey="perf" name="Performance"
        label={{ value: 'Performance', angle: -90, position: 'insideBottomLeft'}}
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} domain={[0, 3200]} />
      <Tooltip />
      <Scatter name="Contest Duration vs Perf"
        data={myContestHist} fill="red" />
      <Label value="Pages of my website" offset={0} position="top" />
    </ScatterChart>
  </div>
);

export default DurationPerfChart;