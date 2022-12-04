import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Label, CartesianGrid, Tooltip } from 'recharts';
import { ContestResult } from '../types';

type Props = { userName: string, latestContestName: string,
  latestContestResults: ContestResult[], myLatestContestResult: ContestResult }

const XRateChart = ({ userName, latestContestName,
    latestContestResults, myLatestContestResult }: Props) => (
  <div className="container">
    <ScatterChart width={700} height={350}
      margin={{top: 50, right: 20, left: 20, bottom: 50}}>
      <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="1.2rem">Algo and heuristic rates of {latestContestName} ({userName} is red)</tspan>
      </text>
      <CartesianGrid />
      <XAxis type="number" dataKey="ARate" name="Algo"
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} domain={[0, 3200]}
        label={{ value: "Algo (sometime after the event)", position: "bottom"}} />
      <YAxis type="number" dataKey="HRate" name="Heuristic (new)"
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]}
        label={{ value: 'Heuristic (new)', angle: -90, position: 'left'}} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="all" fill="#8884d8" data={latestContestResults} />
      <Scatter name="you" fill="red"
        data={[myLatestContestResult]} />
    </ScatterChart>
  </div>
);

export default XRateChart;
