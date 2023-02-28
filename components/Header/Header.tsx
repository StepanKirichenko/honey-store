import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.background}>
      <nav className={styles.container}>
        <Link href="/" className={styles.link}>
          Блог
        </Link>
        <Link href="/catalog" className={styles.link}>
          Каталог
        </Link>
        <Link href="/" className={styles.link}>
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
        <Link href="/" className={styles.link}>
          О компании
        </Link>
        <Link href="/" className={styles.link}>
          Контакты
        </Link>
        <Link href="/" className={styles.link}>
          Корзина
        </Link>
      </nav>
    </header>
  );
}
