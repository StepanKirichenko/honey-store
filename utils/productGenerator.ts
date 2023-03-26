import { Product, ProductCategory } from "./products";

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
];
