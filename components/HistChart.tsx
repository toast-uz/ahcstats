import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, CartesianGrid, Tooltip } from 'recharts';
import { UserResult } from '../types';

type Props = { userName: string, myContestHist: UserResult[]}

const HistChart = ({ userName, myContestHist }: Props) => (
  <div className="container">
    <LineChart width={700} height={350}
      margin={{top: 50, right: 20, left: 20, bottom: 50}}
      data={myContestHist}>
      <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="1.2rem"> {userName}&apos;s Rate & Perf History</tspan>
      </text>
      <CartesianGrid />
      <XAxis dataKey="contestName" />
      <YAxis
        label={{ value: 'Rate or Perf', angle: -90, position: 'left'}}
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} domain={[0, 3200]} />
      <Tooltip />
      <Line type="monotone" dataKey="perf" stroke="red" />
      <Line type="monotone" dataKey="rate" stroke="green" />
      <Label value="Pages of my website" offset={0} position="top" />
    </LineChart>
  </div>
);

export default HistChart;