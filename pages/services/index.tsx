import styles from "@/styles/Services.module.css";
import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
        <title>Sota | Услуги</title>
      </Head>
      <main className={styles.page_content + " " + "col align-center"}>
        <div className="container">
          <h1 className={styles.page_heading}>Услуги</h1>
        </div>
        <div className={styles.grid}>
          <div className={styles.service_card}></div>
        </div>
      </main>
    </>
  );
}
