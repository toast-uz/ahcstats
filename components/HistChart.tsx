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
          <tspan fontSize="1.2rem"> {userName}&apos;s rate and perf history</tspan>
      </text>
      <CartesianGrid />
      <XAxis dataKey="contestName" />
      <YAxis
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} />
      <Tooltip />
      <Line type="monotone" dataKey="perf" stroke="red" />
      <Line type="monotone" dataKey="rate" stroke="green" />
    </LineChart>
  </div>
);

export default HistChart;