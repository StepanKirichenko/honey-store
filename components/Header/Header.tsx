import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { FC, ReactNode, useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { useRouter } from "next/router";
import { JsxElement } from "typescript";

export default function Header() {
  return (
    <header className={styles.background}>
      <nav className={styles.container}>
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
          />
        </Link>
        <PageLink href="/about">О компании</PageLink>
        <PageLink href="/contacts">Контакты</PageLink>
        <CartLink />
      </nav>
    </header>
  );
}

type PageLinkProps = {
  href: string;
  children: ReactNode;
};

const PageLink: FC<PageLinkProps> = (props) => {
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

const CartLink: FC = () => {
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
