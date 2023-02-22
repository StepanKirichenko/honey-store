import Image from "next/image";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: any) {
  const imagePath = `/images/products/${product.image}`;

  return (
    <div className="product-card">
      <Image
        className={styles.image}
        src={imagePath}
        alt={product.name}
        width={450}
        height={602}
      />
      <hr className={styles.divider} />
      <div className={styles.top_row}>
        <a className={styles.name}>{product.name}</a>
        <button className={styles.button}>
          <img src="/images/icons/plus.svg" className={styles.plus} />
        </button>
      </div>
      <div className={styles.bottom_row}>
        <p className={styles.volume}>{product.volume} мл</p>
        <p className={styles.price}>{product.price} р</p>
      </div>
      <hr className={styles.divider} />
    </div>
  );
}
