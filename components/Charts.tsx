import styles from '../styles/Home.module.scss'
import HistChart from './HistChart';
import DurationPerfChart from './DurationPerfChart';
import XRateChart from './XRateChart';
import RatePerfChart from './RatePerfChart';
import { UserResult, ContestMetadata } from '../types';

type Props2 = {
  userName: string,
  myContestResult: UserResult,
  contestMetadata: ContestMetadata,
}

function ContestCharts({ userName, myContestResult, contestMetadata }: Props2) {
  return (
    <div>
      <div className={styles.description}>
        {contestMetadata.contestName} - end date: {contestMetadata.endDate} - duration: {contestMetadata.duration}h
      </div>
      <div className={styles.grid}>
        <RatePerfChart
          userName={userName}
          latestContestName={contestMetadata.contestName}
          maxX={contestMetadata.maxHRateOld}
          maxY={contestMetadata.maxPerf}
          myLatestContestResult={myContestResult} />
      </div>

      <div className={styles.grid}>
        <XRateChart userName={userName}
          latestContestName={contestMetadata.contestName}
          maxX={contestMetadata.maxARate}
          maxY={contestMetadata.maxHRate}
          myLatestContestResult={myContestResult} />
      </div>
    </div>
  )
}

type Props = {
  userName: string,
  myContestHist: UserResult[],
  contestsMetadata: ContestMetadata[],
}

export default function Charts({ userName, myContestHist, contestsMetadata }: Props) {
  const list = []
  console.log(contestsMetadata);
  for (let i = contestsMetadata.length - 1; i >= 0; i--) {
    list.push(
      <ContestCharts
        userName={userName}
        myContestResult={myContestHist[i]}
        contestMetadata={contestsMetadata[i]} />
    )
  }

  return (
    <div>
      <div className={styles.grid}>
        <HistChart userName={userName} myContestHist={myContestHist} />
      </div>

      <div className={styles.grid}>
        <DurationPerfChart userName={userName} myContestHist={myContestHist} />
      </div>

      {list}
    </div>
  )
};
