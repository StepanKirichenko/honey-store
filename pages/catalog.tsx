import { useState } from "react";
import Head from "next/head";
import FilterDropdown from "@/components/FilterDropdown";
import DropdownSelector from "@/components/DropdownSelector";
import ProductGrid from "@/components/ProductGrid";
import { FilterSetting, Product } from "@/utils/products";
import { getAllFilterSettings, getAllProducts } from "@/utils/products";
import styles from "@/styles/Catalog.module.css";

export async function getServerSideProps(context: any) {
  const settings = await getAllFilterSettings();
  const products = await getAllProducts();
  return {
    props: {
      filterSettings: settings,
      products: products,
    },
  };
}

interface Props {
  filterSettings: FilterSetting[];
  products: Product[];
}

export default function Catalog({ filterSettings, products }: Props) {
  const [settings, setSettings] = useState(filterSettings);

  function handleChangeFilterSetting(
    settingName: string,
    optionValue: string,
    isSelected: boolean
  ) {
    setSettings((oldSettings) =>
      oldSettings.map((setting) =>
        setting.name === settingName
          ? {
              ...setting,
              selected: isSelected
                ? [...setting.selected, optionValue]
                : setting.selected.filter((option) => option !== optionValue),
            }
          : setting
      )
    );
  }

  let filteredProducts = products;
  // const weightSetting = settings[2];
  // filteredProducts = products.filter(
  //   (p) =>
  //     weightSetting.selected.length == 0 ||
  //     weightSetting.selected.includes(p.weight)
  // );
  settings.forEach((setting) => {
    filteredProducts = filteredProducts.filter(
      (product) =>
        setting.selected.length == 0 ||
        setting.selected.includes((product as any)[setting.name])
    );
  });

  return (
    <>
      <Head>
        <title>Sota | Каталог</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.catalog}>
          <div className={styles.head}>
            <h1 className={styles.main_heading}>Каталог товаров</h1>
            <div className={styles.filter_settings}>
              {settings.map((setting) => (
                <DropdownSelector
                  key={setting.name}
                  {...setting}
                  handleChangeSelection={handleChangeFilterSetting}
                />
              ))}
            </div>
          </div>
          <div className={styles.sidebar}>
            <button className={styles.sidebar_button}>Мёд</button>
            <button className={styles.sidebar_button}>Чайные напитки</button>
            <button className={styles.sidebar_button}>
              Варенье и конфитюры
            </button>
          </div>
          <div className={styles.product_grid}>
            <ProductGrid products={filteredProducts} />
            <Pagination />
          </div>
        </div>
      </main>
    </>
  );
}

function Pagination() {
  const pageLinkElements = [1, 2, 3, 4].map((page) => (
    <a
      key={page}
      href="#"
      className={`${styles.pagination__link} ${
        page === 1
          ? styles.pagination__link_active
          : styles.pagination__link_inactive
      }`}
    >
      {page}
    </a>
  ));
  return <div className={styles.pagination}>{pageLinkElements}</div>;
}
