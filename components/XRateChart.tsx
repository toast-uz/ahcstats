import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Label, CartesianGrid, Tooltip } from 'recharts';
import { latestContestName, latestContestResults, myLatestContestResults } from '../lib/ahc-stats';

const xRateChart = () => (
  <div className="container">
    <ScatterChart width={700} height={350}
      margin={{top: 50, right: 20, left: 20, bottom: 50}}>
      <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="1.2rem"> {latestContestName} Algo vs Heuristic Rate</tspan>
      </text>
      <CartesianGrid />
      <XAxis type="number" dataKey="ARate" name="Algo Rate"
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} domain={[0, 3200]}
        label={{ value: "Algo Rate", offset: 0, position: "bottom"}} />
      <YAxis type="number" dataKey="HRate" name="Heuristic Rate"
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]}
        label={{ value: 'Heuristic Rate', offset: 10, position: 'top', textAnchor: 'middle' }} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="all" data={latestContestResults} fill="#8884d8" />
      <Scatter name="you" data={myLatestContestResults} fill="red" />
      <Label value="Pages of my website" offset={0} position="top" />
    </ScatterChart>
  </div>
);

export default xRateChart;
