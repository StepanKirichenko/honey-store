import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { ReactNode, useContext, useEffect, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { useRouter } from "next/router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onWindowResize = () => {
      if (window.innerWidth > 1200 && isMenuOpen) {
        console.log("done did it");
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, [isMenuOpen]);

  const linkListStyles = `${styles.full_nav} ${isMenuOpen ? styles.open : ""}`;

  return (
    <header className={styles.background}>
      <nav className={styles.container}>
        <div className={styles.mobile_nav}>
          <Link href="/">
            <Image
              src="/images/logos/sota_logo_dark.svg"
              alt="Логотип Sota"
              width={140}
              height={55}
              className={styles.logo}
            />
          </Link>
          <button
            className={styles.hamburger_button}
            onClick={() => setIsMenuOpen(x => !x)}
          >
            <img
              className={styles.hamburger_image}
              src="/images/icons/hamburger.svg"
            />
          </button>
        </div>
        <div className={linkListStyles}>
          <PageLink href="/catalog">Каталог</PageLink>
          <PageLink href="/services">Услуги</PageLink>
          <PageLink href="/reviews">Отзывы</PageLink>
          <PageLink href="/blog">Блог</PageLink>
          <Link href="/">
            <Image
              src="/images/logos/sota_logo_dark.svg"
              alt="Логотип Sota"
              width={140}
              height={55}
              className={`${styles.logo} ${styles.main_logo}`}
            />
          </Link>
          <PageLink href="/about">О компании</PageLink>
          <PageLink href="/contacts">Контакты</PageLink>
          <CartLink />
        </div>
      </nav>
    </header>
  );
}

type PageLinkProps = {
  href: string;
  children: ReactNode;
};

function PageLink (props: PageLinkProps) {
  const currentRoute = useRouter();
  const currentPage = currentRoute.pathname;
  const className =
    props.href === currentPage
      ? `${styles.link} ${styles.link__current}`
      : styles.link;

  return (
    <Link href={props.href} className={className}>
      {props.children}
    </Link>
  );
};

function CartLink() {
  const cart = useContext(CartContext);
  const currentRoute = useRouter();
  const currentPage = currentRoute.pathname;
  const className =
    "/cart" === currentPage
      ? `${styles.link} ${styles.cart_link} ${styles.link__current}`
      : `${styles.link} ${styles.cart_link}`;

  return (
    <Link href="/cart" className={className}>
      {cart.items.length > 0 && (
        <p className={styles.cart_counter}>{cart.items.length}</p>
      )}
      Корзина
    </Link>
  );
};
