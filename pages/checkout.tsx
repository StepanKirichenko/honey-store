import styles from "@/styles/Checkout.module.css";
import { getAllProducts, Product } from "@/utils/products";

export async function getServerSideProps() {
  const allProducts = await getAllProducts();

  return {
    props: {
      allProducts,
    },
  };
}

export default function Checkout(props: { allProducts: Product[] }) {
  return (
    <main className="mt-page-start mb-page-end row justify-center">
      <div className="container">
        <h1 className={styles.page_title}>Оформление заказа</h1>
        <div className={styles.grid}>
          <div className="col">
            <h2 className={styles.section_title}>Адрес и доставка</h2>
          </div>
          <div className="col">
            <h2 className={styles.section_title}>Ваш заказ</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
