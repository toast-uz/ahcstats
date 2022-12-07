import React from 'react';
import styles from '../styles/Charts.module.scss';
import { LineChart, Line, XAxis, YAxis, Legend, CartesianGrid, Tooltip, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/src/component/DefaultTooltipContent';
import { UserResult } from '../types';
import AtCoderColorByRate from '../lib/AtCoderColor';

type Props = { userName: string, myContestHist: UserResult[]}

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const perf = payload[0].value as number;
    const hRate = payload[1].value as number;
    const aRate = payload[2].value as number;
    return (
      <div className={styles.tooltip}>
        <p className={styles.introduction}>{label}</p>
        <p className={styles['description-' + AtCoderColorByRate(perf)]}>perf: {perf}</p>
        <p className={styles['description-' + AtCoderColorByRate(hRate)]}>rate: {hRate}</p>
        <p className={styles['description-' + AtCoderColorByRate(aRate)]}>algo rate: {aRate}</p>
      </div>
    );
  }
  return null;
};

const HistChart = ({ userName, myContestHist }: Props) => (
  <div>
    <LineChart width={700} height={350}
      margin={{top: 50, right: 20, left: 20, bottom: 50}}
      data={myContestHist}>
      <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="1.2rem"> {userName}&apos;s rate and perf history</tspan>
      </text>
      <CartesianGrid />
      <Legend />
      <XAxis dataKey="contestName" />
      <YAxis
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} />
      <Tooltip content={<CustomTooltip />} />
      <Line name="perf" type="monotone" dataKey="perf" stroke="red" connectNulls={true} />
      <Line name="rate" type="monotone" dataKey="hRate" stroke="green" connectNulls={true} />
      <Line name="algo rate (at the end of each contest)" type="monotone" dataKey="aRate" stroke="blue" strokeDasharray="3 3" connectNulls={true} />
    </LineChart>
  </div>
);

export default HistChart;