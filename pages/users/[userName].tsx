import contestsMetadata from '../../json/contests.json';
import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.scss'
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import type { ContestMetadata, UserResult, UserData } from '../../types';
import { numContests, GetMyContestsHist } from '../../lib/ContestUtils';

const ChartsWithoutSSR = dynamic(
  import("../../components/Charts"), { ssr: false });

async function fetcher(key: string, init?: RequestInit) {
  return fetch(key, init).then((res) => res.json() as Promise<UserData | null>);
}

export default function Home() {
  const router = useRouter();
  let { userName } = router.query;
  userName = userName as string;
  const { data, error } = useSWR(userName ? `/api/users/` + userName : null, fetcher);
  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  const myContestHist = GetMyContestsHist(data);
  return (
    <Layout>
      <div className={styles.description}>
        User name:
        <code className={styles.code}>{userName}</code>
      </div>
      <ChartsWithoutSSR userName={userName}
        myContestHist={myContestHist}
        contestsMetadata={contestsMetadata} />
    </Layout>
  )
};
