import React from 'react';
import styles from '../styles/Home.module.css';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/src/component/DefaultTooltipContent';
import { ContestResult } from '../types';

type Props = { userName: string, latestContestName: string,
  latestContestResults: ContestResult[], myLatestContestResult: ContestResult }

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <div className={styles.custom_tooltip}>
        <p className={styles.intro}>{payload?.[0].payload.UserName}</p>
        <p className={styles.desc}>Rate: {payload?.[0].payload.HRateOld}</p>
        <p className={styles.desc}>Perf: {payload?.[0].payload.Perf}</p>
      </div>
    );
  }
  return null;
};

const PerfRateChart = ({ userName, latestContestName,
    latestContestResults, myLatestContestResult }: Props) => (
  <div className="container">
    <ScatterChart width={700} height={350}
      margin={{top: 50, right: 20, left: 20, bottom: 50}}>
      <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="1.2rem">Rate and perf of {latestContestName} ({userName} is red)</tspan>
      </text>
      <CartesianGrid />
      <XAxis type="number" dataKey="HRateOld" name="Rate (old)"
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} domain={['dataMin', 'dataMax']}
        label={{ value: "Rate (old)", position: "bottom"}} />
      <YAxis type="number" dataKey="Perf" name="Perf"
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]}
        label={{ value: 'Perf', angle: -90, position: 'left'}} />
      <Tooltip content={<CustomTooltip />} />
      <Scatter name="all" fill="#8884d8" data={latestContestResults} />
      <Scatter name="you" fill="red"
        data={[myLatestContestResult]} />
    </ScatterChart>
  </div>
);

export default PerfRateChart;
