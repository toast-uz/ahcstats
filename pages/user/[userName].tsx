import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.css'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { GetMyContestsHist } from '../../lib/ahc-stats';

const HistChartWithoutSSR = dynamic(
  import("../../components/HistChart"), { ssr: false });
const DurationPerfChartWithoutSSR = dynamic(
  import("../../components/DurationPerfChart"), { ssr: false });
const XRateChartWithoutSSR = dynamic(
  import("../../components/XRateChart"), { ssr: false });
const PerfRateChartWithoutSSR = dynamic(
  import("../../components/PerfRateChart"), { ssr: false });

import { latestContestName } from '../../lib/ahc-stats';

export default function Home() {
  const router = useRouter();
  let { userName } = router.query;
  userName = userName as string;
  const myContestHist = GetMyContestsHist(userName);
  return (
    <Layout>
      <div className={styles.description}>
        User name:
        <code className={styles.code}>{userName}</code>
        - Latest contest: {' '}
        <code className={styles.code}>{latestContestName}</code>
      </div>

      <div className={styles.grid}>
        <HistChartWithoutSSR userName={userName} myContestHist={myContestHist} />
      </div>

      <div className={styles.grid}>
        <DurationPerfChartWithoutSSR userName={userName} myContestHist={myContestHist} />
      </div>

      <div className={styles.grid}>
        <PerfRateChartWithoutSSR userName={userName} />
      </div>

      <div className={styles.grid}>
        <XRateChartWithoutSSR userName={userName} />
      </div>
    </Layout>
  )
};
