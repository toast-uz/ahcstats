import contests from '../../json/contests.json';
import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.scss'
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import type { ContestMetadata, UserResult, UserData } from '../../types';

const ChartsWithoutSSR = dynamic(
  import("../../components/Charts"), { ssr: false });

async function fetcher(key: string, init?: RequestInit) {
  return fetch(key, init).then((res) => res.json() as Promise<UserData | null>);
}

export const numContests = contests.length;
export function GetContestMetadata(id: number): ContestMetadata {
  return contests[id];
}

function GetMyContestsHist(userData: UserData) : UserResult[] {
  let res: UserResult[] = [];
  let hRateOld = 0;
  for (let id = 0; id < numContests; id++) {
    const contestName = GetContestMetadata(id).contestName;
    const myContestResult = userData?.[contestName];
    const hRate = myContestResult?.hRate;
    const result: UserResult = {
        contestName: contestName,
        duration: GetContestMetadata(id).duration,
        place: myContestResult?.place,
        perf: myContestResult?.perf,
        hRateOld: hRateOld,
        hRate: hRate,
        aRate: myContestResult?.aRate,
    };
    hRateOld = hRate;
    res.push(result);
  }
  return res;
}

export default function Home() {
  const router = useRouter();
  let { userName } = router.query;
  userName = userName as string;
  const { data, error } = useSWR(userName ? `/api/users/` + userName : null, fetcher);
  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  const myContestHist = GetMyContestsHist(data);
  const myLatestContestResult = myContestHist[numContests - 1];
  const latestContestMetadata = GetContestMetadata(numContests - 1);
  return (
    <Layout>
      <div className={styles.description}>
        User name:
        <code className={styles.code}>{userName}</code>
        - Latest contest: {' '}
        <code className={styles.code}>{latestContestMetadata.contestName}</code>
      </div>
      <ChartsWithoutSSR userName={userName}
        myContestHist={myContestHist}
        latestContestMetadata={latestContestMetadata}
        myLatestContestResult={myLatestContestResult} />
    </Layout>
  )
};
