import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import { latestContestName, latestContestResults } from '../lib/ahc-stats';

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
