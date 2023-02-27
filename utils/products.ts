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
  isOnSale: boolean;
  discount: number;
}

export interface Comment {
  id: number;
  date: string;
  reviewerName: string;
  reviewText: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Мёд акациевый",
    category: "мёд",
    image: "мед_акациевый.png",
    volume: 350,
    price: 400,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 2,
    name: "Мёд майский",
    category: "мёд",
    image: "мед_майский.png",
    volume: 350,
    price: 520,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 3,
    name: "Мёд хлопковый",
    category: "мёд",
    image: "мед_хлопковый.png",
    volume: 350,
    price: 380,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 4,
    name: "Мёд луговой",
    category: "мёд",
    image: "мед_луговой.png",
    volume: 350,
    price: 420,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 5,
    name: "Мёд рапсовый",
    category: "мёд",
    image: "мед_рапсовый.png",
    volume: 350,
    price: 300,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 6,
    name: "Мёд цветочный",
    category: "мёд",
    image: "мед_цветочный.png",
    volume: 350,
    price: 300,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 7,
    name: "Мёд подсолнечниковый",
    category: "мёд",
    image: "мед_подсолнечниковый.png",
    volume: 350,
    price: 280,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 8,
    name: "Мёд разнотравье",
    category: "мёд",
    image: "мед_разнотравье.png",
    volume: 350,
    price: 280,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 9,
    name: "Мёд лесной",
    category: "мёд",
    image: "мед_лесной.png",
    volume: 350,
    price: 300,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 10,
    name: "Мёд боярышниковый",
    category: "мёд",
    image: "мед_боярышниковый.png",
    volume: 350,
    price: 300,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 11,
    name: "Мёд донник с цветком",
    category: "мёд",
    image: "мед_донник_с_цветком.png",
    volume: 350,
    price: 320,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 12,
    name: "Мёд гречишный с цветком",
    category: "мёд",
    image: "мед_гречишный_с_цветком.png",
    volume: 350,
    price: 300,
    isOnSale: true,
    discount: 15,
  },
  {
    id: 13,
    name: "Мёд осотовый",
    category: "мёд",
    image: "мед_осотовый.png",
    volume: 350,
    price: 350,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 14,
    name: "Мёд кипрейный",
    category: "мёд",
    image: "мед_кипрейный.png",
    volume: 350,
    price: 370,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 15,
    name: "Мёд из кориандра",
    category: "мёд",
    image: "мед_из_кориандра.png",
    volume: 350,
    price: 400,
    isOnSale: false,
    discount: 0,
  },
  {
    id: 16,
    name: "Мёд горный",
    category: "мёд",
    image: "мед_горный.png",
    volume: 350,
    price: 370,
    isOnSale: false,
    discount: 0,
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
    name: "volume",
    displayName: "Объём",
    options: [
      {
        value: "350",
        displayName: "0,35",
      },
      {
        value: "500",
        displayName: "0,5",
      },
      {
        value: "1000",
        displayName: "1",
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
  {
    name: "sorting",
    displayName: "По популярности",
    options: [
      {
        value: "popularity",
        displayName: "По популярности",
      },
      {
        value: "new",
        displayName: "Новинки",
      },
      {
        value: "cheap-first",
        displayName: "Сначала дешёвые",
      },
      {
        value: "expensive-first",
        displayName: "Сначала дорогие",
      },
      {
        value: "sale-amount",
        displayName: "По размеру скидки",
      },
    ],
    selected: ["popularity"],
  },
];

const comments: Comment[] = [
  {
    id: 1,
    reviewerName: "Горбунова Галина",
    reviewText:
      "Вкусный, запах приятный. Если поставить на водяную баню, становится тягучим, можно использовать для массажа, либо так лопать) у меня стоял в холодильнике, засахарился",
    rating: 5,
    date: "2 февраля 2021",
  },
  {
    id: 2,
    reviewerName: "Станислав",
    reviewText:
      "Баночка с медом пришла в коробочке, бережно упакованная в пленку с пупырышками. Мед будем заказывать еще. Рекомендую.",
    rating: 5,
    date: "13 марта 2021",
  },
  {
    id: 3,
    reviewerName: "Анастасия Иртыш",
    reviewText:
      "Это какая-то фантастика. Большим любителем меда я себя не считаю и обычно банка живет у меня несколько лет, но в этот раз оказалось не так.  Он идеальный: кремообразный, не тягучий, сладкий, но не приторный, нежный, без намёка на крупицы. Идеален с сырной тарелкой, в каши/творог и просто с чаем.",
    rating: 5,
    date: "31 января 2021",
  },
  {
    id: 4,
    reviewerName: "Светлана",
    reviewText:
      "покупала для рождественских имбирных пряников , со своей задачей мёд справился - аромат от выпечки стоял на весь дом!",
    rating: 5,
    date: "24 декабря 2021",
  },
];

export async function getAllProducts() {
  return products;
}

export async function getAllFilterSettings(): Promise<FilterSetting[]> {
  return filterSettings;
}

export async function getProductById(id: number): Promise<Product | null> {
  const res = products.find((p) => p.id === id);
  return res ? res : null;
}

export async function getAllComments() {
  return comments;
}
