import Image from "next/image";
import { CartContext } from "@/contexts/CartContext";
import styles from "@/styles/Checkout.module.css";
import { getAllProducts, Product } from "@/utils/products";
import { useContext } from "react";
import ListScrollArrows from "@/components/ListScrollArrows";
import Button from "@/components/Button";

export async function getServerSideProps() {
  const allProducts = await getAllProducts();

  return {
    props: {
      allProducts,
    },
  };
}

export default function Checkout(props: { allProducts: Product[] }) {
  const cart = useContext(CartContext);
  const productsInCart = cart.items.map((i) => ({
    product: props.allProducts.find((p) => p.id === i.productId) as Product,
    amount: i.amount,
  }));

  const productsPrice = productsInCart.reduce(
    (total, p) => total + p.product.price * p.amount,
    0
  );

  const deliveryPrice = 300;

  const totalPrice = productsPrice + deliveryPrice;

  const productElements = productsInCart
    .slice(0, 3)
    .map((item) => (
      <Image
        className={styles.product_image}
        src={`/images/products/${item.product.image}`}
        alt=""
        width={450}
        height={602}
      />
    ));

  return (
    <main className="mt-page-start mb-page-end row justify-center">
      <div className="container">
        <h1 className={styles.page_title}>Оформление заказа</h1>
        <div className={styles.grid}>
          <div className="col">
            <h2 className={styles.section_title}>Адрес и доставка</h2>
            <div className="row"></div>
          </div>
          <div className="col">
            <h2 className={styles.section_title}>Ваш заказ</h2>
            <div className={styles.product_images_grid}>{productElements}</div>
            <ListScrollArrows />
            <div className="row justify-space-between mt-medium">
              <p className={styles.price_text}>Сумма заказа</p>
              <p className={styles.price_text}>{productsPrice} р</p>
            </div>
            <div className="row justify-space-between mt-small">
              <p className={styles.price_text}>Доставка</p>
              <p className={styles.price_text}>{deliveryPrice} р</p>
            </div>
            <hr className={styles.divider} />
            <div className="row justify-space-between">
              <p className={styles.price_text_total}>Итого</p>
              <p className={styles.price_text_total}>{totalPrice} р</p>
            </div>
            <div className="row justify-center mt-medium">
              <Button>Завершить оформление</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
