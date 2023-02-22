export function getAllProducts() {}

export interface FilterSettingOption {
  value: string;
  displayName: string;
}

export interface FilterSetting {
  name: string;
  displayName: string;
  options: FilterSettingOption[];
  selected: string[];
}

export async function getAllFilterSettings(): Promise<FilterSetting[]> {
  return [
    {
      name: "year",
      displayName: "Год сбора",
      options: [
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
      ],
      selected: [],
    },
    {
      name: "sort",
      displayName: "Сорт",
      options: [
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
      ],
      selected: [],
    },
    {
      name: "weight",
      displayName: "Вес",
      options: [
        {
          value: "350",
          displayName: "0,35 кг",
        },
        {
          value: "500",
          displayName: "0,5 кг",
        },
        {
          value: "1000",
          displayName: "1 кг",
        },
      ],
      selected: [],
    },
  ];
}
