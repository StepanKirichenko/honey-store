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
            <ServiceCard
              title="Расфасовка мёда под вашей торговой маркой"
              img="/images/services/1.png"
              link="#"
            />
            <ServiceCard
              title="собственная торговая марка"
              img="/images/services/2.png"
              link="#"
            />
            <ServiceCard
              title="разработка и выпуск медовых композиций"
              img="/images/services/3.png"
              link="#"
            />
            <ServiceCard
              title="разработка индивидуального заказа"
              img="/images/services/4.png"
              link="#"
            />
            <ServiceCard
              title="этикетирование"
              img="/images/services/5.png"
              link="#"
            />
            <ServiceCard
              title="переработка мёда в крем"
              img="/images/services/6.png"
              link="#"
            />
          </div>
        </div>
      </main>
    </>
  );
}
