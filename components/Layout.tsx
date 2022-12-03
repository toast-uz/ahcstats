import Head from 'next/head'
import styles from '../styles/Home.module.css'
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';

type Props = { children: ReactNode; };

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AHC-stats</title>
        <meta name="description" content="AHC-stats" />
      </Head>

      <main className={styles.main}>
        <header className={styles.title}>
          <a href="https://atcoder.jp/" target="_blank" rel="noopener noreferrer">AtCoder</a> Heuristic Contest Statistics (AHC-stats)
        </header>
        { children }
      </main>

      <footer className={styles.footer}>
        <a href='https://twitter.com/ToastUz'> by ToastUz </a>
      </footer>
      <Analytics />
    </div>
  )
};

export default Layout;
