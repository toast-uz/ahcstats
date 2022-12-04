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
    const rate = payload[1].value as number;
    return (
      <div className={styles['custom-tooltip']}>
        <p className={styles.introduction}>{label}</p>
        <p className={styles['description-' + AtCoderColorByRate(perf)]}>perf: {perf}</p>
        <p className={styles['description-' + AtCoderColorByRate(rate)]}>rate: {rate}</p>
      </div>
    );
  }
  return null;
};

const HistChart = ({ userName, myContestHist }: Props) => (
  <div className="container">
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
      <Line type="monotone" dataKey="perf" stroke="red" connectNulls={true} />
      <Line type="monotone" dataKey="rate" stroke="green" connectNulls={true} />
    </LineChart>
  </div>
);

export default HistChart;