import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import DropdownSelector from "@/components/DropdownSelector";
import ProductGrid from "@/components/ProductGrid";
import { CatalogPageResponse, FilterSetting, Product } from "@/utils/products";
import {
  getHoneyFilterSettings,
  getTeaAndJamFilterSettings,
} from "@/utils/products";
import styles from "@/styles/Catalog.module.css";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";

export async function getServerSideProps(context: any) {
  const honeySettings = await getHoneyFilterSettings();
  const teaSettings = await getTeaAndJamFilterSettings();
  return {
    props: {
      honeyFilterSettings: honeySettings,
      teaAndJamFilterSettings: teaSettings,
    },
  };
}

interface Props {
  honeyFilterSettings: FilterSetting[];
  teaAndJamFilterSettings: FilterSetting[];
}

const sortingMethods = [
  {
    value: "cheapest",
    displayName: "Сначала дешёвые",
  },
  {
    value: "most-expensive",
    displayName: "Сначала дорогие",
  },
  {
    value: "popularity",
    displayName: "По популярности",
  },
  {
    value: "discount",
    displayName: "По размеру скидки",
  },
];

export default function Catalog({
  honeyFilterSettings,
  teaAndJamFilterSettings,
}: Props) {
  const router = useRouter();
  const categoryQuery = router.query.category;
  let defaultCategory = "honey";
  if (categoryQuery === "tea") {
    defaultCategory = "tea";
  } else if (categoryQuery === "jam") {
    defaultCategory = "jam";
  }
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [settings, setSettings] =
    useState<FilterSetting[]>(honeyFilterSettings);
  const [category, setCategory] = useState(defaultCategory);
  const [sortingMethod, setSortingMethod] = useState("cheapest");
  const [products, setProducts] = useState<Product[]>([]);

  const topPageRef = useRef<null | HTMLDivElement>(null);

  const formRequest = useCallback((): string => {
    const opts = [];
    opts.push(`limit=${16}`);
    opts.push(`page=${currentPage}`);
    opts.push(`category=${category}`);
    opts.push(`sorting-method=${sortingMethod}`);
    settings.forEach((setting) => {
      setting.selected.forEach((value) => {
        opts.push(`${setting.name}=${value}`);
      });
    });
    return opts.join("&");
  }, [currentPage, category, sortingMethod, settings]);

  useEffect(() => {
    setCurrentPage(1);
    setSettings(
      category === "honey" ? honeyFilterSettings : teaAndJamFilterSettings
    );
  }, [category, honeyFilterSettings, teaAndJamFilterSettings]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/products/catalog?${formRequest()}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const pageData = data as CatalogPageResponse;
        setPageCount(pageData.pageCount);
        setIsLoading(false);
        setProducts(pageData.products);
      });
  }, [category, sortingMethod, settings, currentPage, formRequest]);

  function resetFilters() {
    setSettings(
      category === "honey" ? honeyFilterSettings : teaAndJamFilterSettings
    );
  }

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

  function handleChangeCategory(newCaterogy: string) {
    setCategory(newCaterogy);
  }

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
            <div className={styles.filter_settings} ref={topPageRef}>
              {settings.map((setting) => (
                <DropdownSelector
                  key={setting.name}
                  {...setting}
                  handleChangeSelection={handleChangeFilterSetting}
                />
              ))}
              <DropdownSelector
                options={sortingMethods}
                selected={[sortingMethod]}
                name="sorting-method"
                displayName={
                  sortingMethods.find((m) => m.value === sortingMethod)
                    ?.displayName || ""
                }
                handleChangeSelection={(name, value, isSelected) => {
                  setSortingMethod(value);
                }}
              />
            </div>
            <div className={styles.filter_settings__reset_row}>
              <button
                className={styles.filter_settings__reset_button}
                onClick={resetFilters}
              >
                Сбросить фильтры
              </button>
            </div>
          </div>
          <div className={styles.sidebar}>
            <SidebarButton
              category="honey"
              currentCategory={category}
              handleClick={handleChangeCategory}
            >
              Мёд
            </SidebarButton>
            <SidebarButton
              category="tea"
              currentCategory={category}
              handleClick={handleChangeCategory}
            >
              Чайные напитки
            </SidebarButton>
            <SidebarButton
              category="jam"
              currentCategory={category}
              handleClick={handleChangeCategory}
            >
              Варенье и конфитюры
            </SidebarButton>
          </div>
          <div className={styles.product_grid}>
            <ProductGrid products={products} isLoading={isLoading} />
            <Pagination
              pageCount={pageCount}
              currentPage={currentPage}
              handleChangePage={(page) => {
                topPageRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
                setCurrentPage(page);
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}

interface SidebarButtonProps {
  category: string;
  currentCategory: string;
  handleClick: (category: string) => void;
  children: ReactNode;
}

function SidebarButton({
  category,
  currentCategory,
  children,
  handleClick,
}: SidebarButtonProps) {
  return (
    <button
      className={`${styles.sidebar_button} ${
        category === currentCategory && styles.sidebar_button__current
      }`}
      onClick={() => handleClick(category)}
    >
      {children}
    </button>
  );
}
