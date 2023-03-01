import CartProductCard from "@/components/CartProductCard";
import { CartContext } from "@/contexts/CartContext";
import styles from "@/styles/Cart.module.css";
import { getAllProducts, Product } from "@/utils/products";
import Head from "next/head";
import { useContext } from "react";
import Button from "@/components/Button";
import { SecondaryButton } from "@/components/Button";

interface Props {
  allProducts: Product[];
}

export async function getServerSideProps({ params }: any) {
  const allProducts = await getAllProducts();

  return {
    props: {
      allProducts,
    },
  };
}

export default function Cart({ allProducts }: Props) {
  const cart = useContext(CartContext);

  const productsInCart = cart.items.map((i) => ({
    product: allProducts.find((p) => p.id === i.productId) as Product,
    amount: i.amount,
  }));

  const productCards = productsInCart.map((p) => (
    <CartProductCard key={p.product.id} product={p.product} amount={p.amount} />
  ));

  const totalPrice = productsInCart.reduce(
    (total, p) => total + p.product.price * p.amount,
    0
  );

  const isCartEmpty = productCards.length === 0;

  return (
    <>
      <Head>
        <title>Корзина | Sota</title>
      </Head>
      <main className="mt-page-start">
        <section className={styles.cart}>
          <div className="container">
            <h1 className={styles.page_heading}>Корзина</h1>
            <hr className={styles.divider} />
            {productCards.length === 0 ? (
              <h2 className={styles.cart_empty_text}>Ваша корзина пуста</h2>
            ) : (
              <>
                {productCards}
                <div className={styles.total_price_row}>
                  <p className={styles.total_price}>{totalPrice} р</p>
                </div>
              </>
            )}
            <div className={styles.bottom_buttons_row}>
              <SecondaryButton>Продолжить просмотр</SecondaryButton>
              <Button disabled={isCartEmpty}>Оформить заказ</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
