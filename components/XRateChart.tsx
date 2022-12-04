import React from 'react';
import styles from '../styles/Charts.module.scss';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/src/component/DefaultTooltipContent';
import { ContestResult } from '../types';
import AtCoderColorByRate from '../lib/AtCoderColor';

type Props = { userName: string, latestContestName: string,
  latestContestResults: ContestResult[], myLatestContestResult: ContestResult }

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const aRate = payload[0].payload.aRate;
    const hRate = payload[0].payload.hRate;
    return (
      <div className={styles['custom-tooltip']}>
        <p className={styles.introduction}>{payload[0].payload.userName}</p>
        <p className={styles['description-' + AtCoderColorByRate(aRate)]}>algo: {aRate}</p>
        <p className={styles['description-' + AtCoderColorByRate(hRate)]}>heuristic: {hRate}</p>
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
      <XAxis type="number" dataKey="aRate" name="algo"
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} domain={['dataMin', 'dataMax']}
        label={{ value: "algo (sometime after the event)", position: "bottom"}} />
      <YAxis type="number" dataKey="hRate" name="heuristic (new)"
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]}
        label={{ value: 'heuristic (new)', angle: -90, position: 'left'}} />
      <Tooltip content={<CustomTooltip />} />
      <Scatter name="all" fill="#8884d8" data={latestContestResults} />
      <Scatter name="you" fill="red"
        data={[myLatestContestResult]} />
    </ScatterChart>
  </div>
);

export default XRateChart;
