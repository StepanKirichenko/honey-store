import { CartContext } from "@/contexts/CartContext";
import { Product } from "@/utils/products";
import Image from "next/image";
import { useContext } from "react";
import RatingDisplay from "../RatingDisplay";
import styles from "./CartProductCard.module.css";

interface Props {
  product: Product;
  amount: number;
}

export default function CartProductCard({ product, amount }: Props) {
  const cart = useContext(CartContext);

  return (
    <div>
      <div className={styles.row}>
        <Image
          className={styles.remove_button}
          src="/images/icons/cross.svg"
          alt="удалить"
          width={25}
          height={25}
          onClick={() => cart.handleRemoveFromCart(product.id)}
        />
        <div className={styles.product_info}>
          <Image
            className={styles.product_image}
            src={`/images/products/${product.image}`}
            alt={product.name}
            width={220}
            height={220}
          />
          <div className={styles.product_description}>
            <h3 className={styles.product_name}>{product.name}</h3>
            <RatingDisplay />
            <p className={styles.product_description_paragraph}>
              Мёд из цветов — полифлерный продукт. Приставка «поли» означает,
              что пчелы собирают пыльцу и нектар не с какого-либо определённого
              растения, а с разнотравья.
            </p>
            <p className={styles.product_year}>2022</p>
          </div>
        </div>
        <div className={styles.button_container}>
          <button className={styles.empty_button}>
            <h4 className={styles.button_title}>Количество</h4>
            <div className={styles.button_content}>
              <button
                className={styles.adjust_amount_button}
                onClick={() => cart.handleRemoveFromCart(product.id, 1)}
              >
                -
              </button>
              <p className={styles.adjust_amount_button__numbers}>{amount}</p>
              <button
                className={styles.adjust_amount_button}
                onClick={() => cart.handleAddToCart(product.id, 1)}
              >
                +
              </button>
            </div>
          </button>
        </div>
        <div className={styles.button_container}>
          <button className={styles.empty_button}>
            <h4 className={styles.button_title}>Объём</h4>
            <div className={styles.button_content}>
              <p>0,5</p>
            </div>
          </button>
        </div>
        <p className={styles.price}>{product.price * amount} р</p>
      </div>
      <hr className={styles.divider} />
    </div>
  );
}
