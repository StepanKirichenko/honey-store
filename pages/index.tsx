import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import {
  getAllProducts,
  Product,
  Comment,
  getAllComments,
} from "@/utils/products";
import ProductGrid from "@/components/ProductGrid";
import ReviewCard from "@/components/ReviewCard";
import ListScrollArrows from "@/components/ListScrollArrows";
import Button, { ButtonLink } from "@/components/Button";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const products = await getAllProducts();
  const popularProducts = products.slice(0, 6);
  const comments = await getAllComments();

  return {
    props: {
      popularProducts: popularProducts,
      comments: comments,
    },
  };
}

interface Props {
  popularProducts: Product[];
  comments: Comment[];
}

export default function Home({ popularProducts, comments }: Props) {
  return (
    <>
      <Head>
        <title>Sota | Главная</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />

        <section className={styles.section}>
          <div className="container row gap-large">
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

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.section_heading}>Популярные товары</h2>
            <ProductGrid products={popularProducts} columns={3} />
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

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.section_heading}>Отзывы</h2>
            <div className={styles.reviews_grid}>
              {comments.map((c) => (
                <ReviewCard key={c.id} {...c} />
              ))}
            </div>
            <ListScrollArrows />
          </div>
        </section>
      </main>
    </>
  );
}

function Hero() {
  const images = [
    "/images/hero_image.png",
    "/images/articles/article_honey_alternative_to_sugar.png",
    "/images/articles/article_honey_in_winter.png",
    "/images/articles/article_honey_with_ginger.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let isChangeCancelled = false;
    setTimeout(() => {
      if (!isChangeCancelled) {
        setCurrentImage((currentImage + 1) % images.length);
      }
    }, 5000);

    return () => {
      isChangeCancelled = true;
    };
  }, [currentImage]);

  function handleChangeImage(index: number) {
    setCurrentImage(index);
  }

  return (
    <section className={styles.hero}>
      <div className={styles.hero__text}>
        <h2 className={styles.hero__heading}>Натуральный дикий мёд</h2>
        <p className={styles.hero__description}>
          Мы продаем мед с нашей пасеки, контролируя весь процесс создания
          продукции, а также последующее хранение и доставку.
        </p>
        <ButtonLink href="/catalog">Перейти в каталог</ButtonLink>
      </div>
      <div className={styles.hero__img_container}>
        <div className={styles.hero__gallery}>
          {images.map((image, index) => (
            <Image
              key={index}
              className={`${styles.hero__image} ${
                index === currentImage ? styles.current : ""
              }`}
              src={image}
              width={962}
              height={944}
              alt=""
            />
          ))}
          <div className={styles.hero__buttonsHolder}>
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                className={`${styles.hero__button} ${
                  i === currentImage ? styles.current : ""
                }`}
                onClick={() => handleChangeImage(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
