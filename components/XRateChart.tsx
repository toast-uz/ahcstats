import React from 'react';
import styles from '../styles/Charts.module.css';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/src/component/DefaultTooltipContent';
import { ContestResult } from '../types';
import AtCoderColorByRate from '../lib/AtCoderColorClassName';

type Props = { userName: string, latestContestName: string,
  latestContestResults: ContestResult[], myLatestContestResult: ContestResult }

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const aRate = payload[0].payload.ARate;
    const hRate = payload[0].payload.HRate;
    return (
      <div className={styles.custom_tooltip}>
        <p className={styles.introduction}>{payload[0].payload.UserName}</p>
        <p className={styles[AtCoderColorByRate(aRate)]}>Algo: {aRate}</p>
        <p className={styles[AtCoderColorByRate(hRate)]}>Heuristic: {hRate}</p>
      </div>
    );
  }
  return null;
};

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
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} domain={['dataMin', 'dataMax']}
        label={{ value: "Algo (sometime after the event)", position: "bottom"}} />
      <YAxis type="number" dataKey="HRate" name="Heuristic (new)"
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]}
        label={{ value: 'Heuristic (new)', angle: -90, position: 'left'}} />
      <Tooltip content={<CustomTooltip />} />
      <Scatter name="all" fill="#8884d8" data={latestContestResults} />
      <Scatter name="you" fill="red"
        data={[myLatestContestResult]} />
    </ScatterChart>
  </div>
);

export default XRateChart;
