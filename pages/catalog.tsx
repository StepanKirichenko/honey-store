import { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import DropdownSelector from "@/components/DropdownSelector";
import ProductGrid from "@/components/ProductGrid";
import { CatalogPageResponse, FilterSetting, Product } from "@/utils/products";
import { getAllFilterSettings, getAllProducts } from "@/utils/products";
import styles from "@/styles/Catalog.module.css";
import Pagination from "@/components/Pagination";
import FilterDropdown from "@/components/FilterDropdown";

export async function getServerSideProps(context: any) {
  const settings = await getAllFilterSettings();
  return {
    props: {
      filterSettings: settings,
    },
  };
}

interface Props {
  filterSettings: FilterSetting[];
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
]

export default function Catalog({ filterSettings }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [settings, setSettings] = useState<FilterSetting[]>(filterSettings);
  const [category, setCategory] = useState("honey");
  const [sortingMethod, setSortingMethod] = useState("cheapest");
  const [products, setProducts] = useState<Product[]>([]);

  function formRequest(): string {
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
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

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
  }, [category, sortingMethod, settings, currentPage]);

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
            <div className={styles.filter_settings}>
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
		displayName={sortingMethods.find(m => m.value === sortingMethod)?.displayName || ""}
		handleChangeSelection={(name, value, isSelected) => {setSortingMethod(value)}}
	      />
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
              handleChangePage={setCurrentPage}
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
