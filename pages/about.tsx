import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/About.module.css";
import Button, { ButtonLink } from "@/components/Button";

export default function About() {
  return (
    <>
      <Head>
        <title>Sota | О компании</title>
      </Head>
      <main>
        <section className={styles.hero}>
          <div className={styles.hero__text}>
            <h2 className={styles.hero__heading}>
              Мы создаём и продаём мёд с 1998 года
            </h2>
            <p className={styles.hero__description}>
              Компания «Мёд России» осуществляет продажу меда и другой продукции
              пчеловодства как мелким, так и крупным оптом в Москве по
              приемлемой цене. Высокое качество, большой выбор и достойный
              уровень сервиса при приобретении гарантированы. Среди реализуемой
              продукции есть редко встречающиеся виды, для закупки которых к нам
              обращаются клиенты даже из таких регионов, как Волгоградская,
              Пермская области и других. Помимо классического меда, есть
              варианты с маточным молочком, пергой и т. п. Существенно расширить
              ассортимент позволяет реализация сот и другой продукции
              пчеловодства. В ее числе прополис, продукты на его основе, а также
              воск пасечный, пчелиная обножка и напитки на меду.
            </p>
          </div>
          <div className={styles.hero__img_container}>
            <Image
              className={styles.hero__img}
              src="/images/about_hero_image.png"
              width={962}
              height={944}
              alt="человек достаёт соты из улея"
            />
          </div>
        </section>

        <section
          className={styles.section + " " + styles.collaboration_section}
        >
          <div className="cotainer">
            <h2 className={styles.section_heading}>
              Преимущества сотрудничества
            </h2>
            <div className={styles.collaboration_grid}>
              <div className={styles.collaboration_point}>
                <Image
                  src="images/icons/collaboration/quality.svg"
                  alt="отличное качество"
                  width={150}
                  height={150}
                />
                <h3 className={styles.collaboration_point_heading}>
                  Отличное качетсво
                </h3>
                <p className={styles.collaboration_point_paragraph}>
                  Мы вручную собираем мёд с наших пасек и проверяем качество
                  каждой соты.
                </p>
              </div>{" "}
              <div className={styles.collaboration_point}>
                <Image
                  src="images/icons/collaboration/prices.svg"
                  alt="Низкие цены"
                  width={150}
                  height={150}
                />
                <h3 className={styles.collaboration_point_heading}>
                  Низкие цены
                </h3>
                <p className={styles.collaboration_point_paragraph}>
                  Мелкий и крупный опт по приемлимой цене.
                </p>
              </div>{" "}
              <div className={styles.collaboration_point}>
                <Image
                  src="images/icons/collaboration/experience.svg"
                  alt="21 год опыта"
                  width={150}
                  height={150}
                />
                <h3 className={styles.collaboration_point_heading}>
                  21 год опыта
                </h3>
                <p className={styles.collaboration_point_paragraph}>
                  Имеем богатый опыт работы с мёдом и его продуктами.
                </p>
              </div>{" "}
              <div className={styles.collaboration_point}>
                <Image
                  src="images/icons/collaboration/service.svg"
                  alt="Отзывчивый сервис"
                  width={150}
                  height={150}
                />
                <h3 className={styles.collaboration_point_heading}>
                  Отзывчивый сервис
                </h3>
                <p className={styles.collaboration_point_paragraph}>
                  Грамотная консультация специалиста в режиме онлайн.
                </p>
              </div>{" "}
              <div className={styles.collaboration_point}>
                <Image
                  src="images/icons/collaboration/product_range.svg"
                  alt="Большой выбор"
                  width={150}
                  height={150}
                />
                <h3 className={styles.collaboration_point_heading}>
                  Большой выбор
                </h3>
                <p className={styles.collaboration_point_paragraph}>
                  Большой выбор, включающий практически все существующие сорта
                  мёда в Иркутской области.
                </p>
              </div>{" "}
              <div className={styles.collaboration_point}>
                <Image
                  src="images/icons/collaboration/gost.svg"
                  alt="Соответствие ГОСТам"
                  width={150}
                  height={150}
                />
                <h3 className={styles.collaboration_point_heading}>
                  Соответствие ГОСТам
                </h3>
                <p className={styles.collaboration_point_paragraph}>
                  ГОСТ 54644-2011 и ГОСТ Р52451-2005, и справки о соответствии
                  стандартам качества,сертификаты, ветеринарные свидетельства.
                </p>
              </div>
            </div>
            <div className="row justify-center mt-medium">
              <ButtonLink href="#">Вариатны сотрудничества</ButtonLink>
            </div>
          </div>
        </section>

        <section className={styles.offer_section}>
          <div className={styles.offer_text_column}>
            <h2 className={styles.offer_heading}>
              Получите скидку на первый заказ
            </h2>
            <p className={styles.offer_description}>
              Подпишитесь на наши новости и получите промо&#8209;код на первую
              покупку.
            </p>
            <Button>Получить скидку</Button>
          </div>
          <div className={styles.offer_image_container}>
            <Image
              className={styles.offer_image}
              src="/images/tea_and_honey.png"
              alt="чай и мёд"
              width={1220}
              height={498}
            />
          </div>
        </section>
      </main>
    </>
  );
}
