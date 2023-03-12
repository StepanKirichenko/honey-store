import ServiceCard from "@/components/ServiceCard";
import styles from "@/styles/Services.module.css";
import { getAllServices, Service } from "@/utils/services";
import Head from "next/head";

export async function getStaticProps() {
  const allServices = await getAllServices();

  return {
    props: {
      allServices,
    },
  };
}

export default function Services(props: { allServices: Service[] }) {
  return (
    <>
      <Head>
        <title>Sota | Услуги</title>
      </Head>
      <main className={styles.page_content}>
        <div className="container">
          <h1 className={styles.page_heading}>Услуги</h1>
          <div className={styles.grid}>
            {props.allServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                img={service.image}
                link={`/services/${service.id}`}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
