import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: any) {
  const imagePath = `/images/products/${product.image}`;
  const productPagePath = `/products/${product.id}`;

  const priceParagraph = product.isOnSale ? (
    <p className={styles.price}>
      {(product.price * (100 - product.discount)) / 100} р
      <span className={styles.full_price}>{product.price} р</span>
    </p>
  ) : (
    <p className={styles.price}>{product.price} р</p>
  );

  return (
    <div className={styles.product_card}>
      {product.isOnSale && (
        <p className={styles.sale_bubble}>скидка {product.discount}%</p>
      )}
      <Link href={productPagePath}>
        <Image
          className={styles.image}
          src={imagePath}
          alt={product.name}
          width={450}
          height={602}
        />
      </Link>
      <hr className={styles.divider} />
      <div className={styles.top_row}>
        <Link href={productPagePath} className={styles.name}>
          {product.name}
        </Link>
        <button className={styles.button}>
          <img src="/images/icons/plus.svg" className={styles.plus} />
        </button>
      </div>
      <div className={styles.bottom_row}>
        <p className={styles.volume}>{product.volume} мл</p>
        <p className={styles.price}>{priceParagraph}</p>
      </div>
      <hr className={styles.divider} />
    </div>
  );
}
