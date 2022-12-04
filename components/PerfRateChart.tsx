import React from 'react';
import styles from '../styles/Charts.module.scss';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/src/component/DefaultTooltipContent';
import { ContestResult } from '../types';
import AtCoderColorByRate from '../lib/AtCoderColor';

type Props = { userName: string, latestContestName: string,
  latestContestResults: ContestResult[], myLatestContestResult: ContestResult }

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const hRateOld = payload[0].payload.hRateOld;
    const perf = payload[0].payload.perf;
    return (
      <div className={styles['custom-tooltip']}>
        <p className={styles.introduction}>{payload[0].payload.userName}</p>
        <p className={styles['description-' + AtCoderColorByRate(hRateOld)]}>rate: {hRateOld}</p>
        <p className={styles['description-' + AtCoderColorByRate(perf)]}>perf: {perf}</p>
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
      <XAxis type="number" dataKey="hRateOld" name="rate (old)"
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} domain={['dataMin', 'dataMax']}
        label={{ value: "rate (old)", position: "bottom"}} />
      <YAxis type="number" dataKey="perf" name="perf"
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]}
        label={{ value: 'perf', angle: -90, position: 'left'}} />
      <ZAxis type="number" dataKey="attendance" name="attendance" />
      <Tooltip content={<CustomTooltip />} />
      <Scatter name="all" fill="#8884d8" data={latestContestResults} />
      <Scatter name="you" fill="red"
        data={[myLatestContestResult]} />
    </ScatterChart>
  </div>
);

export default PerfRateChart;
