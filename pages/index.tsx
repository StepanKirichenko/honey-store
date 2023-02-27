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

        <section className={styles.description_section}>
          <div className="container row gap-small">
            <div className="col align-start">
              <p className={styles.description_paragraph}>
                Наш интернет-магазин меда готов предложить самые разные сорта
                этого вкусного лакомства, которое можно купить по весьма
                демократичной цене. Наряду с ним мы реализуем и другие товары –
                прополис, цветочную пыльцу, маточное молочко, пергу.
              </p>
              <p className={styles.description_paragraph}>
                Все они обладают целебными свойствами и находят широкое
                применение в медицине. Их с успехом используют для лечения
                гипертонии, простудных и неврологических заболеваний, решения
                проблем с опорно-двигательным аппаратом.
              </p>
            </div>
            <div className="col align-end justify-center">
              <p className={styles.description_paragraph_big}>
                Мы радуем наших клиентов с 2002 года
              </p>
            </div>
          </div>
        </section>

        <section className={styles.product_categories_section}>
          <div className={styles.categories_image_container}>
            <Image
              className={styles.categories_image}
              src="/images/honey-bowl.png"
              alt="мёд"
              width={959}
              height={822}
            />
          </div>
          <div className={styles.categories_links}>
            <div className={styles.category_link_container}>
              <Link href="#" className={styles.category_link}>
                Мёд <p className={styles.category_counter}>50</p>
              </Link>
              <hr className={styles.category_underline} />
            </div>
            <div className={styles.category_link_container}>
              <Link href="#" className={styles.category_link}>
                Чайные напитки <p className={styles.category_counter}>19</p>
              </Link>
              <hr className={styles.category_underline} />
            </div>
            <div className={styles.category_link_container}>
              <Link href="#" className={styles.category_link}>
                Варенье и конфитюры{" "}
                <p className={styles.category_counter}>30</p>
              </Link>
              <hr className={styles.category_underline} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
