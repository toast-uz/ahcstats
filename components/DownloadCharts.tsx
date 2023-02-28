import styles from '../styles/Charts.module.scss';
import FileSaver from 'file-saver';
import { useCallback } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { useCurrentPng } from 'recharts-to-png';
import { ContestResult } from '../types';
import AtCoderColorByRate from '../lib/AtCoderColor';

type Props = {
  contestName: string,
  contestResults: ContestResult[],
}

const CustomTooltip1 = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const hRateOld = payload[0].value as number;
    const perf = payload[1].value as number;
    return (
      <div className={styles.tooltip}>
        <p className={styles.introduction}>{payload[0].payload.userName}</p>
        <p className={styles['description-' + AtCoderColorByRate(hRateOld)]}>rate: {hRateOld}</p>
        <p className={styles['description-' + AtCoderColorByRate(perf)]}>perf: {perf}</p>
      </div>
    );
  }
  return null;
};

const CustomTooltip2 = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
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

export default function DownloadCharts({
    contestName, contestResults }: Props) {
  const [getChart01Png, { ref: chart01Ref }] = useCurrentPng({ backgroundColor: null });
  const handleChart01Download = useCallback(async () => {
    const png = await getChart01Png();
    if (png) {
      FileSaver.saveAs(png, `${contestName}_01.png`);
    }
  }, [getChart01Png, contestName]);
  const [getChart02Png, { ref: chart02Ref }] = useCurrentPng({ backgroundColor: null });
  const handleChart02Download = useCallback(async () => {
    const png = await getChart02Png();
    if (png) {
      FileSaver.saveAs(png, `${contestName}_02.png`);
    }
  }, [getChart02Png, contestName]);

  const hRateOld = contestResults.map(result => { return result.hRateOld; });
  const perf = contestResults.map(result => { return result.perf; });
  const red = 2800;
  const hRateOldMax = Math.max(...hRateOld, red);
  const perfMax = Math.max(...perf, red);
  const hRate = contestResults.map(result => { return result.hRate; });
  const aRate = contestResults.map(result => { return result.aRate; });
  const hRateMax = Math.max(...hRate, red);
  const aRateMax = Math.max(...aRate, red);

  return (
    <div>
      <h4>
        <code>Chart: {contestName}_01</code>
      </h4>
      <ScatterChart width={700} height={350} ref={chart01Ref}
        margin={{top: 50, right: 20, left: 20, bottom: 50}}>
        <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
        </text>
        <XAxis type="number" dataKey="hRateOld" name="rate (old)" tick={false} axisLine={false}
          domain={[0, hRateOldMax]} />
        <YAxis type="number" dataKey="perf" name="perf" tick={false} axisLine={false}
          domain={[0, perfMax]} />
        <ZAxis type="number" dataKey="attendance" range={[0, 60]} name="attendance" />
        <Scatter name="all" fill="#8884d8" data={contestResults} />
        <Tooltip content={<CustomTooltip1 />} />
      </ScatterChart>
      <br />
      <button onClick={handleChart01Download}>
        <code>Download {contestName}_01.png</code>
      </button>
      <h4>
        <code>Chart: {contestName}_02</code>
      </h4>
      <ScatterChart width={700} height={350} ref={chart02Ref}
        margin={{top: 50, right: 20, left: 20, bottom: 50}}>
        <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
        </text>
        <XAxis type="number" dataKey="aRate" name="algo" tick={false} axisLine={false}
          domain={[0, aRateMax]} />
        <YAxis type="number" dataKey="hRate" name="heuristic (new)" tick={false} axisLine={false}
          domain={[0, hRateMax]} />
        <ZAxis type="number" dataKey="attendance" range={[0, 60]} name="attendance" />
        <Scatter name="all" fill="#8884d8" data={contestResults} />
        <Tooltip content={<CustomTooltip2 />} />
      </ScatterChart>
      <br />
      <button onClick={handleChart02Download}>
        <code>Download {contestName}_02.png</code>
      </button>
    </div>
  );
};
