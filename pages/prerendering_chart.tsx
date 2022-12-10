import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import { ContestResult } from '../types';
import contests from '../json/contests.json';
import ahcStats from '../json/ahc-stats.json';

const numContests = contests.length;
const latestContestName: string = ahcStats[numContests - 1].contestName;
const latestContestResults: ContestResult[] = ahcStats[numContests - 1].results;

const DownloadChartsWithoutSSR = dynamic(
  import("../components/DownloadCharts"), { ssr: false });

export default function Home() {
  return (
    <Layout>
      <DownloadChartsWithoutSSR
        contestName={latestContestName}
        contestResults={latestContestResults} />
    </Layout>
  )
};
