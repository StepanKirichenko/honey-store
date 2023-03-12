import Image from "next/image";
import { getAllServices, Service } from "@/utils/services";
import styles from "@/styles/Service.module.css";
import { SmallButton } from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import ListScrollArrows from "@/components/ListScrollArrows";
import ScrollableList from "@/components/ScrollableList";

export async function getStaticPaths() {
  const allServices = await getAllServices();
  const ids = allServices.map((service) => service.id);
  const paths = ids.map((id) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const allServices = await getAllServices();
  const service = allServices.find(
    (service) => service.id === context.params.id
  );

  return {
    props: {
      allServices,
      service,
    },
  };
}

export default function ServicePage(props: {
  allServices: Service[];
  service: Service;
}) {
  return (
    <main>
      <section className={styles.service__section}>
        <div className={styles.service__description}>
          <h1 className={styles.service__heading}>{props.service.title}</h1>
          <p className={styles.service__paragraph}>
            Повышение доверия покупателей благодаря наличию информации на
            упаковке;
          </p>
          <p className={styles.service__paragraph}>
            Возможность реализации товара в любом торговом центре;
          </p>
          <p className={styles.service__paragraph}>
            Создание как потребительских, так и подарочных форм;
          </p>
          <p className={styles.service__paragraph}>Удобство транспортировки;</p>
          <p className={styles.service__paragraph}>
            Гарантия сохранности мёда при хранении и продаже.
          </p>

          <div className="row mt-medium mb-small">
            <SmallButton>Заказать фасовку</SmallButton>
          </div>

          <p className={styles.service__paragraph_small}>
            Интернет-магазин «Мёд России» предлагает услуги расфасовки мёда в
            пластиковую или стеклянную тару под вашей собственной торговой
            маркой. Обратившись в нашу компанию, вы получите готовую продукцию в
            упаковках, подходящих для розничной продажи. Качество мёда
            подтверждается сертификатами и декларациями соответствия.
          </p>
        </div>
        <Image
          className={styles.service__image}
          src={props.service.image}
          alt={props.service.title}
          width={940}
          height={944}
        />
      </section>

      <section className="col align-center mb-page-end">
        <div className="container">
          <h2 className={styles.recommended__heading}>Другие услуги</h2>
          {/* <div className={styles.recommended__grid}>
            {props.allServices
              .filter((service) => service.id !== props.service.id)
              .slice(0, 3)
              .map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  img={service.image}
                  link={`/services/${service.id}`}
                />
              ))}
          </div> */}
          <ScrollableList showCount={3}>
            {props.allServices
              .filter((service) => service.id !== props.service.id)
              // .slice(0, 3)
              .map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  img={service.image}
                  link={`/services/${service.id}`}
                />
              ))}
          </ScrollableList>
        </div>
      </section>
    </main>
  );
}
