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
    const aRate = payload[0].value as number;
    const hRate = payload[1].value as number;
    return (
      <div className={styles.tooltip}>
        <p className={styles.introduction}>{payload[0].payload.userName}</p>
        <p className={styles['description-' + AtCoderColorByRate(aRate)]}>algo: {aRate}</p>
        <p className={styles['description-' + AtCoderColorByRate(hRate)]}>heuristic: {hRate}</p>
      </div>
    );
  }
  return null;
};

const XRateChart = ({ userName, latestContestName,
    latestContestResults, myLatestContestResult }: Props) => {
  const hRate = latestContestResults.map(result => { return result.hRate; });
  const aRate = latestContestResults.map(result => { return result.aRate; });
  const hRateMax = Math.max(...hRate);
  const aRateMax = Math.max(...aRate);
  return (
    <div className={styles[`background-${latestContestName}-02`]}>
      <ScatterChart width={700} height={350}
        margin={{top: 50, right: 20, left: 20, bottom: 50}}>
        <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="1.2rem">Algo and heuristic rates of {latestContestName} ({userName} is red)</tspan>
        </text>
        <CartesianGrid />
        <XAxis type="number" dataKey="aRate" name="algo"
          ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} domain={[0, aRateMax]}
          label={{ value: "algo (at the end of the event)", position: "bottom"}} />
        <YAxis type="number" dataKey="hRate" name="heuristic (new)"
          ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} domain={[0, hRateMax]}
          label={{ value: 'heuristic (new)', angle: -90, position: 'left'}} />
        <Tooltip content={<CustomTooltip />} />
        <Scatter name="you" fill="red"
          data={[myLatestContestResult]} />
      </ScatterChart>
    </div>
  );
};

export default XRateChart;
