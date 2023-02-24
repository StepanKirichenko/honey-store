import Image from "next/image";
import FilterDropdown from "@/components/FilterDropdown";
import Button from "@/components/Button";
import type { Product } from "@/utils/products";
import { getProductById } from "@/utils/products";
import styles from "@/styles/ProductPage.module.css";

interface Props {
  product: Product;
}

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const product = await getProductById(Number(id));
  return {
    props: {
      product: product,
    },
  };
}

export default function ProductPage({ product }: Props) {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div className="container row">
          <div className="col">
            <div className={styles.product_info_column}>
              <h1 className={styles.product_name}>{product.name}</h1>
              <div className={styles.rating_row}>
                <img src="/images/icons/full_heart.svg" />
                <img src="/images/icons/full_heart.svg" />
                <img src="/images/icons/full_heart.svg" />
                <img src="/images/icons/full_heart.svg" />
                <img src="/images/icons/full_heart.svg" />
              </div>
              <p className={styles.product_description}>
                Мёд из цветов — полифлерный продукт. Приставка «поли» означает,
                что пчелы собирают пыльцу и нектар не с какого-либо
                определённого растения, а с разнотравья. Именно этим
                и обуславливается лечебный эффект — вобрав в себя массу полезных
                веществ, этот вид мёда имеет богатейший состав. Он содержит
                фолиевую кислоту, аминокислоты, витамины группы С, В и К,
                микроэлементы, другие биологически активные компоненты.
              </p>
              <div className={styles.buying_options_container}>
                <div className={styles.buying_options_group}>
                  <h3 className={styles.buying_options_group_heading}>Объём</h3>
                  <div className={styles.buying_options_group_options}>
                    <button className={styles.buying_option_button}>0.3</button>
                    <button className={styles.buying_option_button}>0.5</button>
                    <button className={styles.buying_option_button}>1</button>
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
                <p className={styles.product_price}>{product.price}р</p>
                <Button>Добавить в корзину</Button>
              </div>
            </div>
          </div>
          <div className="col">
            <Image
              src={`/images/products/${product.image}`}
              alt={product.name}
              width={450}
              height={602}
              className={styles.product_image}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.reviews_section}`}>
        <div className="container row">
          <div className="col">
            <h2 className={styles.reviews_section_heading}>Характеристики</h2>
          </div>
          <div className="col">
            <h2 className={styles.reviews_section_heading}>Отзывы</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
