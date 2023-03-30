import { ReactNode } from "react";
import styles from "@/components/Button/Button.module.css";
import Link from "next/link";

interface Props {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

interface LinkProps {
  children?: ReactNode;
  href: string;
  disabled?: boolean;
}

export default function Button({ children, disabled = false, onClick }: Props) {
  return (
    <button
      disabled={disabled}
      className={styles.button + " " + styles.button_primary}
      onClick={() => onClick?.()}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children }: Props) {
  return (
    <button className={styles.button + " " + styles.button_secondary}>
      {children}
    </button>
  );
}

export function SmallButton({ children }: Props) {
  return (
    <button
      className={`${styles.button} ${styles.button_primary} ${styles.button_small}`}
    >
      {children}
    </button>
  );
}

export function ButtonLink({ children, href, disabled = false }: LinkProps) {
  return disabled ? (
    <Button disabled={disabled}>{children}</Button>
  ) : (
    <Link className={`${styles.button} ${styles.button_primary}`} href={href}>
      {children}
    </Link>
  );
}

export function SmallButtonLink({ children, href }: LinkProps) {
  return (
    <Link
      className={`${styles.button} ${styles.button_primary} ${styles.button_small}`}
      href={href}
    >
      {children}
    </Link>
  );
}

export function SecondaryButtonLink({ children, href }: LinkProps) {
  return (
    <Link className={`${styles.button} ${styles.button_secondary}`} href={href}>
      {children}
    </Link>
  );
}
