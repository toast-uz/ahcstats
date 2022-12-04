import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout';
import React from 'react';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const inputRef = React.createRef<HTMLInputElement>();
  const handleClick = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const userName = inputRef?.current?.value;
    console.log(inputRef?.current?.value);
    router.push('/users/' + userName);
  }
  return (
    <Layout>
      <div className={styles.description}>
        <input className={styles.input} type="text" name="AtCoder UserName"
          ref={inputRef} placeholder="AtCoder UserName" />
        <button className={styles.code} onClick={handleClick}>Submit</button>
      </div>
    </Layout>
  )
};
