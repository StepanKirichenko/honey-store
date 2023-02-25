import styles from "./ProductGrid.module.css";
import ProductCard from "@/components/PorductCard";
import { Product } from "@/utils/products";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  const productElements = products.map((product) => (
    <ProductCard key={product.name} product={product} />
  ));

  return <div className={styles.product_grid}>{productElements}</div>;
}
