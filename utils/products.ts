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

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  volume: number;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Мёд акациевый",
    category: "мёд",
    image: "мед_акациевый.png",
    volume: 350,
    price: 400,
  },
  {
    id: 2,
    name: "Мёд майский",
    category: "мёд",
    image: "мед_майский.png",
    volume: 350,
    price: 520,
  },
  {
    id: 3,
    name: "Мёд хлопковый",
    category: "мёд",
    image: "мед_хлопковый.png",
    volume: 350,
    price: 380,
  },
  {
    id: 4,
    name: "Мёд луговой",
    category: "мёд",
    image: "мед_луговой.png",
    volume: 350,
    price: 420,
  },
  {
    id: 5,
    name: "Мёд рапсовый",
    category: "мёд",
    image: "мед_рапсовый.png",
    volume: 350,
    price: 300,
  },
  {
    id: 6,
    name: "Мёд цветочный",
    category: "мёд",
    image: "мед_цветочный.png",
    volume: 350,
    price: 300,
  },
];

const filterSettings: FilterSetting[] = [
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
  {
    name: "packaging",
    displayName: "Упаковка",
    options: [
      {
        value: "glass",
        displayName: "стекло",
      },
      {
        value: "plastic",
        displayName: "пластик",
      },
    ],
    selected: [],
  },
];

export async function getAllProducts() {
  return products;
}

export async function getAllFilterSettings(): Promise<FilterSetting[]> {
  return filterSettings;
}
