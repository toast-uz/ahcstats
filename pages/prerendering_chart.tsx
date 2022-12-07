import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { GetMyContestsHist, latestContestName, latestContestResults, GetLatestContestResultIdBy } from '../lib/ahc-stats';

const DownloadChartsWithoutSSR = dynamic(
  import("../components/DownloadCharts"), { ssr: false });

export default function Home() {
  return (
    <Layout>
      <DownloadChartsWithoutSSR
        latestContestName={latestContestName}
        latestContestResults={latestContestResults} />
    </Layout>
  )
};
