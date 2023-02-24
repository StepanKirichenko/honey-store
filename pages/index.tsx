import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sota | Главная</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.hero}>
          <div className={styles.hero__text}>
            <h2 className={styles.hero__heading}>Натуральный дикий мёд</h2>
            <p className={styles.hero__description}>
              Мы продаем мед с нашей пасеки, контролируя весь процесс создания
              продукции, а также последующее хранение и доставку.
            </p>
            <Link href="/catalog" className={styles.hero__catalog_link}>
              Перейти в каталог
            </Link>
          </div>
          <div className={styles.hero__img_container}>
            <Image
              className={styles.hero__img}
              src="/images/hero_image.png"
              width={962}
              height={944}
              alt="акациевый мёд"
            />
          </div>
        </section>
      </main>
    </>
  );
}
