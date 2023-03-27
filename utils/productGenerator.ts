import {
  HoneyType,
  Packaging,
  Product,
  ProductCategory,
  Weight,
} from "./products";

interface ProductGroup {
  name: string;
  image: string;
  basePrice: number;
  isOnSale: boolean;
  discount: number;
  category: ProductCategory;
}

const productGroups: ProductGroup[] = [
  {
    name: "Мёд акациевый",
    image: "мед_акациевый",
    basePrice: 400,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд майский",
    image: "мед_майский",
    basePrice: 520,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд хлопковый",
    image: "мед_хлопковый",
    basePrice: 380,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд луговой",
    image: "мед_луговой",
    basePrice: 420,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд рапсовый",
    image: "мед_рапсовый",
    basePrice: 300,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд цветочный",
    image: "мед_цветочный",
    basePrice: 300,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд подсолнечниковый",
    image: "мед_подсолнечниковый",
    basePrice: 280,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд разнотравье",
    image: "мед_разнотравье",
    basePrice: 280,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд лесной",
    image: "мед_лесной",
    basePrice: 300,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд боярышниковый",
    image: "мед_боярышниковый",
    basePrice: 300,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд донник с цветком",
    image: "мед_донник_с_цветком",
    basePrice: 320,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд гречишный с цветком",
    image: "мед_гречишный_с_цветком",
    basePrice: 300,
    isOnSale: true,
    discount: 15,
    category: "honey",
  },
  {
    name: "Мёд осотовый",
    image: "мед_осотовый",
    basePrice: 350,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд кипрейный",
    image: "мед_кипрейный",
    basePrice: 370,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд из кориандра",
    image: "мед_из_кориандра",
    basePrice: 400,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Мёд горный",
    image: "мед_горный",
    basePrice: 370,
    isOnSale: false,
    discount: 0,
    category: "honey",
  },
  {
    name: "Чай горный чабрец",
    image: "чай_горный_чабрец",
    basePrice: 200,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай царский сбор",
    image: "чай_царский_сбор",
    basePrice: 220,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай шалфей",
    image: "чай_шалфей",
    basePrice: 180,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай зверобой",
    image: "чай_зверобой",
    basePrice: 230,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай земляника",
    image: "чай_земляника",
    basePrice: 230,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай релакс",
    image: "чай_релакс",
    basePrice: 230,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай кипрей отборный",
    image: "чай_кипрей_отборный",
    basePrice: 190,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай чабрец шиповник",
    image: "чай_чабрец_шиповник",
    basePrice: 210,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай сила Байкала",
    image: "чай_сила_байкала",
    basePrice: 170,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай гречиха",
    image: "чай_гречиха",
    basePrice: 190,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай брусника смородина",
    image: "чай_брусника_смородина",
    basePrice: 180,
    isOnSale: true,
    discount: 15,
    category: "tea",
  },
  {
    name: "Чай знахарь",
    image: "чай_знахарь",
    basePrice: 190,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай сушеная душица",
    image: "чай_сушеная_душица",
    basePrice: 200,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай чабрец и душица",
    image: "чай_чабрец_и_душица",
    basePrice: 180,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай медовый тимьян",
    image: "чай_медовый_тимьян",
    basePrice: 190,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Чай ромашка и липа",
    image: "чай_ромашка_и_липа",
    basePrice: 180,
    isOnSale: false,
    discount: 0,
    category: "tea",
  },
  {
    name: "Варенье вишнёвое",
    image: "варенье_вишневое",
    basePrice: 150,
    isOnSale: false,
    discount: 0,
    category: "jam",
  },
  {
    name: "Варенье из сосновых шишек",
    image: "варенье_из_сосновых_шишек",
    basePrice: 150,
    isOnSale: false,
    discount: 0,
    category: "jam",
  },
  {
    name: "Варенье из хвои",
    image: "варенье_из_хвои",
    basePrice: 160,
    isOnSale: false,
    discount: 0,
    category: "jam",
  },
  {
    name: "Варенье из апельсина",
    image: "варенье_из_апельсина",
    basePrice: 150,
    isOnSale: false,
    discount: 0,
    category: "jam",
  },
  {
    name: "Конфитюр облепиха",
    image: "конфитюр_облепиха",
    basePrice: 160,
    isOnSale: false,
    discount: 0,
    category: "jam",
  },
  {
    name: "Варенье из роз",
    image: "варенье_из_роз",
    basePrice: 180,
    isOnSale: false,
    discount: 0,
    category: "jam",
  },
  {
    name: "Конфитюр ежевика",
    image: "конфитюр_ежевика",
    basePrice: 160,
    isOnSale: false,
    discount: 0,
    category: "jam",
  },
  {
    name: "Конфитюр калина",
    image: "конфитюр_калина",
    basePrice: 160,
    isOnSale: false,
    discount: 0,
    category: "jam",
  },
  {
    name: "Варенье из абрикоса",
    image: "варенье_из_абрикоса",
    basePrice: 150,
    isOnSale: false,
    discount: 0,
    category: "jam",
  },
  {
    name: "Конфитюр брусника",
    image: "конфитюр_брусника",
    basePrice: 160,
    isOnSale: false,
    discount: 0,
    category: "jam",
  },
  {
    name: "Варенье из груши",
    image: "варенье_из_груши",
    basePrice: 150,
    isOnSale: false,
    discount: 0,
    category: "jam",
  },
  {
    name: "Конфитюр земляника",
    image: "конфитюр_земляника",
    basePrice: 160,
    isOnSale: false,
    discount: 0,
    category: "jam",
  },
];

interface Indexable {
  [key: string]: number;
}

function generateAllProducts(): Product[] {
  const allProducts: Product[] = [];

  const honeyWeights = ["350", "500", "1000"];
  const teaWeights = ["350", "500"];
  const years = ["2022", "2021", "2020"];
  const honeyTypes = ["liquid", "crystal", "creme"];
  const packagingTypes = ["glass", "plastic"];

  const weightMultipliers: Indexable = { "350": 1, "500": 1.5, "1000": 2.5 };
  const yearMultipliers: Indexable = { "2022": 1, "2021": 0.95, "2020": 0.9 };
  const honeyTypeMultipliers: Indexable = {
    liquid: 1,
    crystal: 0.9,
    creme: 1.2,
  };
  const packagingTypeMultipliers: Indexable = { glass: 1, plastic: 0.8 };

  productGroups.forEach((group, groupIndex) => {
    let productIndex = 0;
    if (group.category === "honey") {
      honeyWeights.forEach((weight) => {
        years.forEach((year) => {
          honeyTypes.forEach((honeyType) => {
            packagingTypes.forEach((packagingType) => {
              allProducts.push({
                groupId: groupIndex.toString(),
                id: `${groupIndex}-${productIndex++}`,
                name: group.name,
                image: `${group.image}.png`,
                category: group.category,
                price: Math.floor(
                  group.basePrice *
                    weightMultipliers[weight] *
                    yearMultipliers[year] *
                    honeyTypeMultipliers[honeyType] *
                    packagingTypeMultipliers[packagingType]
                ),
                isOnSale: group.isOnSale,
                discount: group.discount,
                popularity: Math.floor(Math.random() * 10000),
                weight: weight as Weight,
                year: year,
                honeyType: honeyType as HoneyType,
                packaging: packagingType as Packaging,
              });
            });
          });
        });
      });
    } else {
      teaWeights.forEach((weight) => {
        years.forEach((year) => {
          allProducts.push({
            groupId: groupIndex.toString(),
            id: `${groupIndex}-${productIndex++}`,
            name: group.name,
            image: `${group.image}.png`,
            category: group.category,
            price: Math.floor(
              group.basePrice *
                weightMultipliers[weight] *
                yearMultipliers[year]
            ),
            isOnSale: group.isOnSale,
            discount: group.discount,
            popularity: Math.floor(Math.random() * 10000),
            weight: weight as Weight,
            year: year,
            honeyType: "none" as HoneyType,
            packaging: "none" as Packaging,
          });
        });
      });
    }
  });

  return allProducts;
}
