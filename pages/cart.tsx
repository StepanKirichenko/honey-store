import CartProductCard from "@/components/CartProductCard";
import { CartContext } from "@/contexts/CartContext";
import styles from "@/styles/Cart.module.css";
import { Product } from "@/utils/products";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { ButtonLink, SecondaryButtonLink } from "@/components/Button";


export default function Cart() {
  const cart = useContext(CartContext);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (cart.items.length > 0) {
      Promise.all(
        cart.items.map((item) =>
          fetch(`/api/products/get-product-by-id?id=${item.productId}`)
            .then((res) => res.json())
            .then((product) => product as Product)
        )
      ).then((value) => setProducts(value));
    }
  }, []);

  const productsInCart = products
    .filter((p) => cart.items.find((i) => i.productId === p.id) !== undefined)
    .map((p) => ({
      product: p,
      amount: cart.items.find((i) => i.productId === p.id)!.amount,
    }));

  const productCards = productsInCart.map((p) => (
    <CartProductCard key={p.product.id} product={p.product} amount={p.amount} />
  ));

  const totalPrice = productsInCart.reduce(
    (total, p) => total + p.product.price * p.amount,
    0
  );

  const isCartEmpty = cart.items.length === 0;

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
            {isCartEmpty ? (
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
              <SecondaryButtonLink href="/catalog">
                Продолжить просмотр
              </SecondaryButtonLink>
              <ButtonLink disabled={isCartEmpty} href="/checkout">
                Оформить заказ
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
