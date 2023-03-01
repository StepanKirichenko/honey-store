import CartProductCard from "@/components/CartProductCard";
import ProductCard from "@/components/ProductCard";
import { CartContext } from "@/contexts/CartContext";
import styles from "@/styles/Cart.module.css";
import { getAllProducts, Product } from "@/utils/products";
import Head from "next/head";
import { useContext } from "react";

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
            {productCards}
          </div>
        </section>
      </main>
    </>
  );
}
