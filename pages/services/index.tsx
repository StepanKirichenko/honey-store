import ServiceCard from "@/components/ServiceCard";
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
          <div className={styles.grid}>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </main>
    </>
  );
}
