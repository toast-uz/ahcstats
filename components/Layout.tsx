import Head from 'next/head'
import styles from '../styles/Home.module.css'
import type { ReactNode } from 'react';
type Props = { children: ReactNode; };

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AHC-stats</title>
        <meta name="description" content="AHC-stats" />
      </Head>

      <main className={styles.main}>
        <header>
          <h1 className={styles.title}>
            <a href="https://atcoder.jp/" target="_blank" rel="noopener noreferrer">AtCoder</a> Heuristic Contest Statistics (AHC-stats)
          </h1>
        </header>
        <body>
          { children }
        </body>
      </main>
    </div>
  )
};
