import Image from "next/image";
import styles from "./RatingDisplay.module.css";

export default function RatingDisplay() {
  return (
    <div className={styles.container}>
      {[1, 2, 3, 4, 5].map((x) => (
        <Image
          key={x}
          src="/images/icons/full_heart.svg"
          alt="заполненное сердце"
          width={20}
          height={20}
        />
      ))}
    </div>
  );
}
