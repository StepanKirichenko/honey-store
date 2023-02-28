import styles from "@/styles/Cart.module.css";
import Head from "next/head";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Корзина | Sota</title>
      </Head>
      <main className="mt-page-start">
        <section className={styles.cart}>
          <div className="container">
            <h1 className={styles.page_heading}>Корзина</h1>
          </div>
        </section>
      </main>
    </>
  );
}
