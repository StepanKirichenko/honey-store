import allProducts from "./allProdutcs.json" assert { type: "json" };

export type ProductCategory = "honey" | "tea" | "jam";
export type Weight = "350" | "500" | "1000";
export type Packaging = "glass" | "plastic";
export type HoneyType = "liquid" | "crystal" | "creme";

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
  groupId: string;
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  price: number;
  isOnSale: boolean;
  discount: number;
  popularity: number;
  weight: Weight;
  year: string;
  honeyType: HoneyType;
  packaging: Packaging;
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
    groupId: "1",
    id: "1-1",
    name: "Мёд акациевый",
    category: "honey",
    image: "мед_акациевый.png",
    price: 400,
    isOnSale: false,
    discount: 0,
    popularity: 1000,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "1",
    id: "1-2",
    name: "Мёд акациевый",
    category: "honey",
    image: "мед_акациевый.png",
    price: 650,
    isOnSale: false,
    discount: 0,
    popularity: 800,
    weight: "500",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "2",
    id: "2-1",
    name: "Мёд майский",
    category: "honey",
    image: "мед_майский.png",
    price: 520,
    isOnSale: false,
    discount: 0,
    popularity: 500,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "2",
    id: "2-2",
    name: "Мёд майский",
    category: "honey",
    image: "мед_майский.png",
    price: 480,
    isOnSale: false,
    discount: 0,
    popularity: 500,
    weight: "350",
    year: "2022",
    honeyType: "crystal",
    packaging: "glass",
  },
  {
    groupId: "3",
    id: "3-1",
    name: "Мёд хлопковый",
    image: "мед_хлопковый.png",
    category: "honey",
    price: 520,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "3",
    id: "3-2",
    name: "Мёд хлопковый",
    image: "мед_хлопковый.png",
    category: "honey",
    price: 520,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2021",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "4",
    id: "4-1",
    name: "Мёд луговой",
    image: "мед_луговой.png",
    category: "honey",
    price: 420,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "4",
    id: "4-2",
    name: "Мёд луговой",
    image: "мед_луговой.png",
    category: "honey",
    price: 400,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "plastic",
  },
  {
    groupId: "5",
    id: "5-1",
    name: "Мёд рапсовый",
    image: "мед_рапсовый.png",
    category: "honey",
    price: 300,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "6",
    id: "6-1",
    name: "Мёд цветочный",
    image: "мед_цветочный.png",
    category: "honey",
    price: 300,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "7",
    id: "7-1",
    name: "Мёд подсолнечниковый",
    image: "мед_подсолнечниковый.png",
    category: "honey",
    price: 280,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "8",
    id: "8-1",
    name: "Мёд разнотравье",
    image: "мед_разнотравье.png",
    category: "honey",
    price: 280,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "9",
    id: "9-1",
    name: "Мёд лесной",
    image: "мед_лесной.png",
    category: "honey",
    price: 300,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "10",
    id: "10-1",
    name: "Мёд боярышниковый",
    image: "мед_боярышниковый.png",
    category: "honey",
    price: 300,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "11",
    id: "11-1",
    name: "Мёд боярышниковый",
    image: "мед_боярышниковый.png",
    category: "honey",
    price: 320,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "12",
    id: "12-1",
    name: "Мёд гречишный с цветком",
    image: "мед_гречишный_с_цветком.png",
    category: "honey",
    price: 300,
    isOnSale: true,
    discount: 15,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "13",
    id: "13-1",
    name: "Мёд осотовый",
    image: "мед_осотовый.png",
    category: "honey",
    price: 350,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "14",
    id: "14-1",
    name: "Мёд кипрейный",
    image: "мед_кипрейный.png",
    category: "honey",
    price: 370,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "15",
    id: "15-1",
    name: "Мёд из кориандра",
    image: "мед_из_кориандра.png",
    category: "honey",
    price: 400,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
  {
    groupId: "16",
    id: "16-1",
    name: "Мёд горный",
    image: "мед_горный.png",
    category: "honey",
    price: 370,
    isOnSale: false,
    discount: 0,
    popularity: 100,
    weight: "350",
    year: "2022",
    honeyType: "liquid",
    packaging: "glass",
  },
];

const honeyFilterSettings: FilterSetting[] = [
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
    name: "honeyType",
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
];

const teaAndJamFilterSettings: FilterSetting[] = [
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
    name: "weight",
    displayName: "Вес",
    options: [
      {
        value: "350",
        displayName: "0,35",
      },
      {
        value: "500",
        displayName: "0,5",
      },
    ],
    selected: [],
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
  // return allProducts;
  return products;
}

export interface CatalogPageRequest {
  limit: number;
  page: number;
  sortingMethod: string;
  category: ProductCategory;
  weight: Weight[] | null;
  year: string[] | null;
  honeyType: HoneyType[] | null;
  packaging: Packaging[] | null;
}

export interface CatalogPageResponse {
  pageCount: number;
  page: number;
  products: Product[];
}

export function getCatalogPage(req: CatalogPageRequest): CatalogPageResponse {
  let res = allProducts;
  res = res
    .filter((p) => req.category === p.category)
    .filter(
      (p) => req.weight === null || req.weight.includes(p.weight as Weight)
    )
    .filter((p) => req.year === null || req.year.includes(p.year));
  if (req.category === "honey") {
    res = res
      .filter(
        (p) =>
          req.honeyType === null ||
          req.honeyType.includes(p.honeyType as HoneyType)
      )
      .filter(
        (p) =>
          req.packaging === null ||
          req.packaging.includes(p.packaging as Packaging)
      );
  }
  if (req.sortingMethod === "cheapest") {
    res = res.sort((a, b) => (a.price < b.price ? -1 : 1));
  } else if (req.sortingMethod === "most-expensive") {
    res = res.sort((a, b) => (a.price < b.price ? 1 : -1));
  } else if (req.sortingMethod === "popularity") {
    res = res.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
  } else if (req.sortingMethod === "discount") {
    res = res.sort((a, b) => (a.discount < b.discount ? 1 : -1));
  }
  const pageCount = Math.ceil(res.length / req.limit);
  const pageStartIndex = (req.page - 1) * req.limit;
  res = res.slice(pageStartIndex, pageStartIndex + req.limit);

  return {
    pageCount: pageCount,
    page: req.page,
    products: res as Product[],
  };
}

export async function getHoneyFilterSettings(): Promise<FilterSetting[]> {
  return honeyFilterSettings;
}

export async function getTeaAndJamFilterSettings(): Promise<FilterSetting[]> {
  return teaAndJamFilterSettings;
}

export async function getProductById(id: string): Promise<Product | null> {
  const res = allProducts.find((p) => p.id === id);
  return res ? (res as Product) : null;
}

export async function getProductGroup(id: string): Promise<Product[]> {
  const groupId = id.split("-")[0];
  const productsInGroup = allProducts
    .filter((p) => p.groupId === groupId)
    .map((p) => p as Product);
  return productsInGroup;
}

export async function getRecommendedProducts(): Promise<Product[]> {
  const recommended = allProducts
    .sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
    .slice(0, 6)
    .map((p) => p as Product);

  return recommended;
}

export async function getAllComments() {
  return comments;
}

export function getProductPrice(product: Product) {
  return Math.floor(product.price * (1 - product.discount / 100));
}

export interface CategoryCounts {
  honey: number;
  tea: number;
  jam: number;
}

export async function getCategoryCounts(): Promise<CategoryCounts> {
  let honey = new Set<string>();
  let tea = new Set<string>();
  let jam = new Set<string>();

  allProducts.forEach((product) => {
    switch (product.category) {
      case "honey":
        honey.add(product.groupId);
        break;
      case "tea":
        tea.add(product.groupId);
        break;
      case "jam":
        jam.add(product.groupId);
        break;
    }
  });

  return {
    honey: honey.size,
    tea: tea.size,
    jam: jam.size,
  };
}
