import FileSaver from 'file-saver';
import { useCallback } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis } from 'recharts';
import { useCurrentPng } from 'recharts-to-png';
import { ContestResult } from '../types';

type Props = {
  latestContestName: string,
  latestContestResults: ContestResult[],
}

export default function DownloadCharts({
    latestContestName, latestContestResults }: Props) {
  const [getChart01Png, { ref: chart01Ref }] = useCurrentPng();
  const handleChart01Download = useCallback(async () => {
    const png = await getChart01Png();
    if (png) {
      FileSaver.saveAs(png, 'contest_01.png');
    }
  }, [getChart01Png]);
  const [getChart02Png, { ref: chart02Ref }] = useCurrentPng();
  const handleChart02Download = useCallback(async () => {
    const png = await getChart02Png();
    if (png) {
      FileSaver.saveAs(png, 'contest_02.png');
    }
  }, [getChart02Png]);

  const hRateOld = latestContestResults.map(result => { return result.hRateOld; });
  const perf = latestContestResults.map(result => { return result.perf; });
  const hRateOldMax = Math.max(...hRateOld);
  const hRateOldMin = Math.min(...hRateOld);
  const perfMax = Math.max(...perf);
  const perfMin = Math.min(...perf);
  const hRate = latestContestResults.map(result => { return result.hRate; });
  const aRate = latestContestResults.map(result => { return result.aRate; });
  const hRateMax = Math.max(...hRate);
  const hRateMin = Math.min(...hRate);
  const aRateMax = Math.max(...aRate);
  const aRateMin = Math.min(...aRate);

  return (
    <div>
      <h4>
        <code>Chart: {latestContestName}_01</code>
      </h4>
      <ScatterChart width={700} height={350} ref={chart01Ref}
        margin={{top: 50, right: 20, left: 20, bottom: 50}}>
        <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
        </text>
        <XAxis type="number" dataKey="hRateOld" name="rate (old)" tick={false} axisLine={false}
          domain={[hRateOldMin, hRateOldMax]} />
        <YAxis type="number" dataKey="perf" name="perf" tick={false} axisLine={false}
          domain={[perfMin, perfMax]} />
        <ZAxis type="number" dataKey="attendance" range={[0, 60]} name="attendance" />
        <Scatter name="all" fill="#8884d8" data={latestContestResults} />
      </ScatterChart>
      <br />
      <button onClick={handleChart01Download}>
        <code>Download contest_01.png</code>
      </button>
      <h4>
        <code>Chart: {latestContestName}_02</code>
      </h4>
      <ScatterChart width={700} height={350} ref={chart02Ref}
        margin={{top: 50, right: 20, left: 20, bottom: 50}}>
        <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
        </text>
        <XAxis type="number" dataKey="aRate" name="algo" tick={false} axisLine={false}
          domain={[aRateMin, aRateMax]} />
        <YAxis type="number" dataKey="hRate" name="heuristic (new)" tick={false} axisLine={false}
          domain={[hRateMin, hRateMax]} />
        <ZAxis type="number" dataKey="attendance" range={[0, 60]} name="attendance" />
        <Scatter name="all" fill="#8884d8" data={latestContestResults} />
      </ScatterChart>
      <br />
      <button onClick={handleChart02Download}>
        <code>Download contest_02.png</code>
      </button>
    </div>
  );
};
