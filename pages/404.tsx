import styles from '../styles/Home.module.css'
import Script from "next/script";
import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Layout>
      <div className={styles.description}>
        404 - Page Not Found....redirecting to Home Page after 3 seconds
      </div>
      <Script id='redirect'>
        {`
        window.setTimeout(function() {
          document.location.href="/";
        }, 3000);
        `}
      </Script>
    </Layout>
  )
};
