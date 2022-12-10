import styles from '../styles/Home.module.scss'
import HistChart from './HistChart';
import DurationPerfChart from './DurationPerfChart';
import XRateChart from './XRateChart';
import RatePerfChart from './RatePerfChart';
import { UserResult, ContestMetadata } from '../types';

type Props = {
    userName: string,
    myContestHist: UserResult[],
    latestContestMetadata: ContestMetadata,
    myLatestContestResult: UserResult,
}

export default function Charts({ userName, myContestHist,
    latestContestMetadata, myLatestContestResult }: Props) {
  return (
    <div>
      <div className={styles.grid}>
        <HistChart userName={userName} myContestHist={myContestHist} />
      </div>

      <div className={styles.grid}>
        <DurationPerfChart userName={userName} myContestHist={myContestHist} />
      </div>

      <div className={styles.grid}>
        <RatePerfChart
          userName={userName}
          latestContestName={latestContestMetadata.contestName}
          maxX={latestContestMetadata.maxHRateOld}
          maxY={latestContestMetadata.maxPerf}
          myLatestContestResult={myLatestContestResult} />
      </div>

      <div className={styles.grid}>
        <XRateChart userName={userName}
          latestContestName={latestContestMetadata.contestName}
          maxX={latestContestMetadata.maxARate}
          maxY={latestContestMetadata.maxHRate}
          myLatestContestResult={myLatestContestResult} />
      </div>
    </div>
  )
};
