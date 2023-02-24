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

  return (
    <>
      <div className={styles.product_grid}>{productElements}</div>
      <Pagination />
    </>
  );
}

function Pagination() {
  const pageLinkElements = [1, 2, 3, 4].map((page) => (
    <a
      href="#"
      className={`${styles.pagination__link} ${
        page === 1
          ? styles.pagination__link_active
          : styles.pagination__link_inactive
      }`}
    >
      {page}
    </a>
  ));
  return <div className={styles.pagination}>{pageLinkElements}</div>;
}
