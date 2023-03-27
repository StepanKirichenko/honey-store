import styles from "./ProductGrid.module.css";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/utils/products";

interface Props {
  products: Product[];
  columns?: number;
  isLoading?: boolean;
}

export default function ProductGrid({
  products,
  columns = 4,
  isLoading = false,
}: Props) {
  const productElements = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      {isLoading ? (
        <div className={styles.loading}>
          <img src="/images/icons/loading.svg" className={styles.loadingIcon} />
        </div>
      ) : (
        <div
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          className={styles.product_grid}
        >
          {productElements}
        </div>
      )}
    </>
  );
}
