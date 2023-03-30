import Head from "next/head";
import Image from "next/image";
import FilterDropdown from "@/components/FilterDropdown";
import Button from "@/components/Button";
import { SmallButton } from "@/components/Button";
import ReviewCard from "@/components/ReviewCard";
import {
  Product,
  getAllComments,
  Comment,
  getProductGroup,
  getRecommendedProducts,
  getProductPrice,
  getHoneyFilterSettings,
  getTeaAndJamFilterSettings,
  FilterSetting,
  Weight,
} from "@/utils/products";
import styles from "@/styles/ProductPage.module.css";
import ProductGrid from "@/components/ProductGrid";
import ListScrollArrows from "@/components/ListScrollArrows";
import { useEffect, useState } from "react";

interface Props {
  initialProduct: Product;
  products: Product[];
  filterSettings: FilterSetting[];
  recommendedProducts: Product[];
  comments: Comment[];
}

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const products = await getProductGroup(id);
  const initialProduct = products.find((p) => p.id === id)!;
  let filterSettings;
  if (products[0].category === "honey") {
    filterSettings = await getHoneyFilterSettings();
  } else {
    filterSettings = await getTeaAndJamFilterSettings();
  }
  const recommendedProducts = await getRecommendedProducts();
  const allComments = await getAllComments();
  const comments = allComments.slice(0, 3);
  return {
    props: {
      initialProduct: initialProduct,
      products: products,
      filterSettings: filterSettings,
      recommendedProducts: recommendedProducts,
      comments: comments,
    },
  };
}

export default function ProductPage({
  initialProduct,
  products,
  filterSettings,
  recommendedProducts,
  comments,
}: Props) {
  const [currentProduct, setCurrentProduct] = useState(initialProduct);
  const [weight, setWeight] = useState(initialProduct.weight);
  const [year, setYear] = useState(initialProduct.year);
  const [honeyType, setHoneyType] = useState(initialProduct.honeyType);
  const [packaging, setPackaging] = useState(initialProduct.packaging);

  useEffect(() => {
    if (currentProduct.category === "honey") {
      setCurrentProduct(
        products.find(
          (p) =>
            p.weight === weight &&
            p.year === year &&
            p.honeyType === honeyType &&
            p.packaging === packaging
        )!
      );
    } else {
      setCurrentProduct(
        products.find((p) => p.weight === weight && p.year === year)!
      );
    }
  }, [weight, year, honeyType, packaging]);

  const weightVariants = filterSettings.find((s) => s.name === "weight")!;
  const yearVariants = filterSettings.find((s) => s.name === "year")!;
  const honeyTypeVariants = filterSettings.find((s) => s.name === "honeyType")!;
  const packagingVariants = filterSettings.find((s) => s.name === "packaging")!;

  return (
    <>
      <Head>
        <title>{currentProduct.name} | Sota</title>
      </Head>
      <div className={styles.page}>
        <section className={styles.section}>
          <div className="container row">
            <div className="col">
              <div className={styles.product_info_column}>
                <h1 className={styles.product_name}>{currentProduct.name}</h1>
                <div className={styles.rating_row}>
                  <img src="/images/icons/full_heart.svg" />
                  <img src="/images/icons/full_heart.svg" />
                  <img src="/images/icons/full_heart.svg" />
                  <img src="/images/icons/full_heart.svg" />
                  <img src="/images/icons/full_heart.svg" />
                </div>
                <p className={styles.product_description}>
                  Мёд из цветов — полифлерный продукт. Приставка «поли»
                  означает, что пчелы собирают пыльцу и нектар не с какого-либо
                  определённого растения, а с разнотравья. Именно этим
                  и обуславливается лечебный эффект — вобрав в себя массу
                  полезных веществ, этот вид мёда имеет богатейший состав.
                  Он содержит фолиевую кислоту, аминокислоты, витамины группы С,
                  В и К, микроэлементы, другие биологически активные компоненты.
                </p>
                <div className={styles.buying_options_container}>
                  <div className={styles.buying_options_group}>
                    <h3 className={styles.buying_options_group_heading}>Вес</h3>
                    <div className={styles.buying_options_group_options}>
                      {weightVariants.options.map((o) => (
                        <ButtonSelector
                          value={o.value}
                          displayName={o.displayName}
                          isSelected={o.value === weight}
                          handleClick={(v) => setWeight(v as Weight)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className={styles.buying_options_group}>
                    <h3 className={styles.buying_options_group_heading}>
                      Количество
                    </h3>
                    <div className={styles.buying_options_group_options}>
                      <button className={styles.buying_option_button}>
                        - <span style={{ margin: "0 16px " }}>10</span> +
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.buying_options_container}>
                  <FilterDropdown
                    name="year"
                    displayName="Год сбора"
                    options={[
                      {
                        value: "2022",
                        displayName: "2022",
                      },
                      {
                        value: "2021",
                        displayName: "2021",
                      },
                      {
                        value: "2020",
                        displayName: "2020",
                      },
                    ]}
                    selected={[]}
                    handleChangeFilterSetting={() => {}}
                  />
                  <FilterDropdown
                    name="sort"
                    displayName="Сорт"
                    options={[
                      {
                        value: "liquid",
                        displayName: "жидкий",
                      },
                      {
                        value: "crystal",
                        displayName: "кристалл",
                      },
                      {
                        value: "creme",
                        displayName: "крем",
                      },
                    ]}
                    selected={[]}
                    handleChangeFilterSetting={() => {}}
                  />
                  <FilterDropdown
                    name="packaging"
                    displayName="Упаковка"
                    options={[
                      {
                        value: "glass",
                        displayName: "стекло",
                      },
                      {
                        value: "plastic",
                        displayName: "пластик",
                      },
                    ]}
                    selected={[]}
                    handleChangeFilterSetting={() => {}}
                  />
                </div>
                <div className={styles.add_to_cart_row}>
                  <p className={styles.product_price}>
                    {getProductPrice(currentProduct)}р
                  </p>
                  <Button>Добавить в корзину</Button>
                </div>
              </div>
            </div>
            <div className="col">
              <Image
                src={`/images/products/${currentProduct.image}`}
                alt={currentProduct.name}
                width={450}
                height={602}
                className={styles.product_image}
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.reviews_section}`}>
          <div className="container row gap-large">
            <div className="col">
              <h2 className={styles.reviews_section_heading}>Характеристики</h2>
              <p className={styles.characteristics_paragraph}>
                цвет — как правило, золотистый или светло-желтый, реже
                темно-коричневый
              </p>
              <hr />
              <p className={styles.characteristics_paragraph}>
                вкус — нежный, без горчинки, с приятным и долгим послевкусием
              </p>
              <hr />
              <p className={styles.characteristics_paragraph}>
                консистенция — тягучая, вязкая, но достаточно жидкая
              </p>
              <hr />
              <p className={styles.characteristics_paragraph}>
                аромат — насыщенный, цветочный, с многообразием оттенков
              </p>
              <hr />
            </div>
            <div className="col">
              <h2 className={styles.reviews_section_heading}>Отзывы</h2>
              <div className={styles.review_cards_container}>
                {comments.map((c) => (
                  <ReviewCard key={c.id} {...c} />
                ))}
              </div>
              <div className="row justify-end">
                <SmallButton>Смотреть все отзывы</SmallButton>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.recommended_section}`}>
          <div className="container">
            <h2 className={styles.recommended_section_heading}>
              Рекомендуемые товары
            </h2>
            <RecommendedPorductGrid recommendedProducts={recommendedProducts} />
          </div>
        </section>
      </div>
    </>
  );
}

interface RecommendedProductGridProps {
  recommendedProducts: Product[];
}

function RecommendedPorductGrid({
  recommendedProducts,
}: RecommendedProductGridProps) {
  const slice = recommendedProducts.slice(0, 5);

  return (
    <>
      <ProductGrid products={slice} columns={5} />
      <ListScrollArrows />
    </>
  );
}

interface ButtonSelectorProps {
  value: string;
  displayName: string;
  isSelected: boolean;
  handleClick: (value: string) => void;
}

function ButtonSelector({
  value,
  displayName,
  isSelected,
  handleClick,
}: ButtonSelectorProps) {
  return (
    <button
      className={`${styles.buying_option_button} ${
        isSelected ? styles.current : ""
      }`}
      onClick={() => handleClick(value)}
    >
      {displayName}
    </button>
  );
}
