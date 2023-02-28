import Image from "next/image";
import RatingDisplay from "../RatingDisplay";
import styles from "./CartProductCard.module.css";

interface Props {}

export default function CartProductCard() {
  return (
    <div>
      <div className={styles.row}>
        <Image
          src="/images/icons/cross.svg"
          alt="удалить"
          width={25}
          height={25}
        />
        <div className={styles.product_info}>
          <Image
            className={styles.product_image}
            src="/images/products/мед_акациевый.png"
            alt="продукт"
            width={220}
            height={220}
          />
          <div className={styles.product_description}>
            <h3 className={styles.product_name}>Мёд акациевый</h3>
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
              <p>-</p>
              <p>5</p>
              <p>+</p>
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
        <p className={styles.price}>2250 р</p>
      </div>
      <hr className={styles.divider} />
    </div>
  );
}
