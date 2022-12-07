import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.scss'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { GetMyContestsHist, latestContestName, latestContestResults, GetLatestContestResultIdBy } from '../../lib/ahc-stats';

const ChartsWithoutSSR = dynamic(
  import("../../components/Charts"), { ssr: false });

export default function Home() {
  const router = useRouter();
  let { userName } = router.query;
  userName = userName as string;
  const myContestHist = GetMyContestsHist(userName);
  const myLatestContestResult = latestContestResults[GetLatestContestResultIdBy(userName)];
  return (
    <Layout>
      <div className={styles.description}>
        User name:
        <code className={styles.code}>{userName}</code>
        - Latest contest: {' '}
        <code className={styles.code}>{latestContestName}</code>
      </div>
      <ChartsWithoutSSR userName={userName}
        myContestHist={myContestHist}
        latestContestName={latestContestName}
        latestContestResults={latestContestResults}
        myLatestContestResult={myLatestContestResult} />
    </Layout>
  )
};
