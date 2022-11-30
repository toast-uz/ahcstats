import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";
const PerfHistChartWithoutSSR = dynamic(
  import("../components/PerfHistChart"),
  { ssr: false }
);
const DurationPerfChartWithoutSSR = dynamic(
  import("../components/DurationPerfChart"),
  { ssr: false }
);
const XRateChartWithoutSSR = dynamic(
  import("../components/XRateChart"),
  { ssr: false }
);
const PerfRateChartWithoutSSR = dynamic(
  import("../components/PerfRateChart"),
  { ssr: false }
);

import { latestContestName } from '../data/ahc-stats';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AHC-stats</title>
        <meta name="description" content="AHC-stats" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://atcoder.jp/" target="_blank" rel="noopener noreferrer">AtCoder</a> Heuristic Contest Statistics (AHC-stats)
        </h1>

        <p className={styles.description}>
          User name: {' '}
          <code className={styles.code}>ToastUz</code>
          - Latest contest: {' '}
          <code className={styles.code}>{latestContestName}</code>
        </p>

        <div className={styles.grid}>
          <PerfHistChartWithoutSSR />
        </div>

        <div className={styles.grid}>
          <DurationPerfChartWithoutSSR />
        </div>

        <div className={styles.grid}>
          <PerfRateChartWithoutSSR />
        </div>

        <div className={styles.grid}>
          <XRateChartWithoutSSR />
        </div>
      </main>

      <footer className={styles.footer}>
        by toast-uz
      </footer>
    </div>
  )
}
