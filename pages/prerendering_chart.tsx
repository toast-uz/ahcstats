import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import contestData from '../json/ahc021.json';

const DownloadChartsWithoutSSR = dynamic(
  import("../components/DownloadCharts"), { ssr: false });

export default function Home() {
  return (
    <Layout>
      <DownloadChartsWithoutSSR
        contestName={contestData.contestName}
        contestResults={contestData.results} />
    </Layout>
  )
};
