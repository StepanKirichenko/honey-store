import { CartContext } from "@/contexts/CartContext";
import { getAllProducts, getProductById, getProductPrice, Product } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import styles from "./ProductCard.module.css";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const cart = useContext(CartContext);

  const imagePath = `/images/products/${product.image}`;
  const productPagePath = `/products/${product.id}`;

  const priceParagraph = product.isOnSale ? (
    <p className={styles.price}>
      {getProductPrice(product)} р
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
        <button
          className={styles.button}
          onClick={() => cart.handleAddToCart(product.id, 1)}
        >
          <img src="/images/icons/plus.svg" className={styles.plus} />
        </button>
      </div>
      <div className={styles.bottom_row}>
        <p className={styles.volume}>{product.weight} мл</p>
        {priceParagraph}
      </div>
      <hr className={styles.divider} />
    </div>
  );
}
