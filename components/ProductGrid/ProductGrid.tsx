import styles from "./ProductGrid.module.css";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/utils/products";

interface Props {
  products: Product[];
  columns?: number;
}

export default function ProductGrid({ products, columns = 4 }: Props) {
  const productElements = products.map((product) => (
    <ProductCard key={product.name} product={product} />
  ));

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      className={styles.product_grid}
    >
      {productElements}
    </div>
  );
}
