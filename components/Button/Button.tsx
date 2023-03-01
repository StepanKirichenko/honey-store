import { ReactNode } from "react";
import styles from "@/components/Button/Button.module.css";

interface Props {
  children?: ReactNode;
  disabled?: boolean;
}

export default function Button({ children, disabled = false }: Props) {
  return (
    <button
      disabled={disabled}
      className={styles.button + " " + styles.button_primary}
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
