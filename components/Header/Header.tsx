import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

export default function Header() {
  const cart = useContext(CartContext);

  return (
    <header className={styles.background}>
      <nav className={styles.container}>
        <Link href="/blog" className={styles.link}>
          Блог
        </Link>
        <Link href="/catalog" className={styles.link}>
          Каталог
        </Link>
        <Link href="/services" className={styles.link}>
          Услуги
        </Link>
        <Link href="/" className={styles.link}>
          Акции
        </Link>
        <Link href="/" className={styles.link}>
          <Image
            src="/images/logos/sota_logo_dark.svg"
            alt="Логотип Sota"
            width={140}
            height={55}
          />
        </Link>
        <Link href="/about" className={styles.link}>
          О компании
        </Link>
        <Link href="/contacts" className={styles.link}>
          Контакты
        </Link>
        <Link href="/cart" className={`${styles.link} ${styles.cart_link}`}>
          {cart.items.length > 0 && (
            <p className={styles.cart_counter}>{cart.items.length}</p>
          )}
          Корзина
        </Link>
      </nav>
    </header>
  );
}
