import { ReactNode } from "react";
import styles from "@/components/Button.module.css";

interface Props {
  children?: ReactNode;
}

export default function Button({ children }: Props) {
  return <button className={styles.button}>{children}</button>;
}

export function SmallButton({ children }: Props) {
  return (
    <button className={`${styles.button} ${styles.button_small}`}>
      {children}
    </button>
  );
}
