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
  HoneyType,
  Packaging,
} from "@/utils/products";
import styles from "@/styles/ProductPage.module.css";
import ProductGrid from "@/components/ProductGrid";
import ListScrollArrows from "@/components/ListScrollArrows";
import { useContext, useEffect, useState } from "react";
import DropdownSelector from "@/components/DropdownSelector";
import { CartContext } from "@/contexts/CartContext";

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
  const cart = useContext(CartContext);
  const [currentProduct, setCurrentProduct] = useState(initialProduct);
  const [weight, setWeight] = useState(initialProduct.weight);
  const [year, setYear] = useState(initialProduct.year);
  const [honeyType, setHoneyType] = useState(initialProduct.honeyType);
  const [packaging, setPackaging] = useState(initialProduct.packaging);
  const [amount, setAmount] = useState(10);

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
                          key={o.value}
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
                      <div className={styles.adjust_amount_button}>
                        <button onClick={() => setAmount(amount - 1)}>-</button>
                        <p>{amount}</p>
                        <button onClick={() => setAmount(amount + 1)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.buying_options_container}>
                  {currentProduct.category === "honey" ? (
                    <>
                      <DropdownSelector
                        {...yearVariants}
                        selected={[year]}
                        handleChangeSelection={(name, value, isSelected) =>
                          setYear(value)
                        }
                      />
                      <DropdownSelector
                        {...honeyTypeVariants}
                        selected={[honeyType]}
                        handleChangeSelection={(name, value, isSelected) =>
                          setHoneyType(value as HoneyType)
                        }
                      />
                      <DropdownSelector
                        {...packagingVariants}
                        selected={[packaging]}
                        handleChangeSelection={(name, value, isSelected) =>
                          setPackaging(value as Packaging)
                        }
                      />
                    </>
                  ) : (
                    <div className={styles.buying_options_group}>
                      <h3 className={styles.buying_options_group_heading}>
                        Год сбора
                      </h3>
                      <div className={styles.buying_options_group_options}>
                        {yearVariants.options.map((o) => (
                          <ButtonSelector
                            key={o.value}
                            value={o.value}
                            displayName={o.displayName}
                            isSelected={year === o.value}
                            handleClick={(y) => setYear(y)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.add_to_cart_row}>
                  <p className={styles.product_price}>
                    {getProductPrice(currentProduct)}р
                  </p>
                  <Button
                    onClick={() =>
                      cart.handleAddToCart(currentProduct.id, amount)
                    }
                  >
                    Добавить в корзину
                  </Button>
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
