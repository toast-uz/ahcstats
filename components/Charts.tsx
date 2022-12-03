import styles from '../styles/Home.module.css'
import HistChart from './HistChart';
import DurationPerfChart from './DurationPerfChart';
import PerfRateChart from './PerfRateChart';
import XRateChart from './XRateChart';
import { UserResult, ContestResult } from '../types';

type Props = {
    userName: string,
    myContestHist: UserResult[],
    latestContestName: string,
    latestContestResults: ContestResult[],
    myLatestContestResult: ContestResult,
}

export default function Charts({ userName, myContestHist,
    latestContestName, latestContestResults, myLatestContestResult }: Props) {
  return (
    <div>
      <div className={styles.grid}>
        <HistChart userName={userName} myContestHist={myContestHist} />
      </div>

      <div className={styles.grid}>
        <DurationPerfChart userName={userName} myContestHist={myContestHist} />
      </div>

      <div className={styles.grid}>
        <PerfRateChart
          userName={userName}
          latestContestName={latestContestName}
          latestContestResults={latestContestResults}
          myLatestContestResult={myLatestContestResult} />
      </div>

      <div className={styles.grid}>
        <XRateChart userName={userName}
          latestContestName={latestContestName}
          latestContestResults={latestContestResults}
          myLatestContestResult={myLatestContestResult} />
      </div>
    </div>
  )
};
