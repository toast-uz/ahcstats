import styles from '../styles/Home.module.css'
import Script from "next/script";
import Link from 'next/link';
import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Layout>
      <div className={styles.description}>
        404 - Page Not Found....
        redirecting to <Link href="/">Home Page</Link> after 5 seconds
      </div>
      <Script id='redirect'>
        {`
        window.setTimeout(function() {
          document.location.href="/";
        }, 5000);
        `}
      </Script>
    </Layout>
  )
};
