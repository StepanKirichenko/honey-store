import { useState } from "react";
import Head from "next/head";
import FilterDropdown from "@/components/FilterDropdown";
import { FilterSetting } from "@/utils/products";
import { getAllFilterSettings } from "@/utils/products";
import styles from "@/styles/Catalog.module.css";

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

export default function Catalog({ filterSettings }: Props) {
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
                <FilterDropdown
                  key={setting.name}
                  {...setting}
                  handleChangeFilterSetting={handleChangeFilterSetting}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
