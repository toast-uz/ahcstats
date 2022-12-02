import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout';
import React from 'react';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const inputRef = React.createRef<HTMLInputElement>();
  const handleClick = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const userName = inputRef?.current?.value;
    console.log(inputRef?.current?.value);
    router.push('/' + userName);
  }
  return (
    <Layout>
      <div>
        <input className={styles.input} type="text" name="name"
          ref={inputRef} placeholder="AtCoder UserID" />
        <button onClick={handleClick}>Submit</button>
      </div>
    </Layout>
  )
};
