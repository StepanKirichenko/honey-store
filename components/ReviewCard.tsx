import styles from "@/components/ReviewCard.module.css";
import Image from "next/image";

interface Props {
  reviewerName: string;
  reviewText: string;
  rating: number;
  date: string;
}

export default function ReviewCard({
  reviewerName,
  reviewText,
  rating,
  date,
}: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{reviewerName}</h3>
      <p className={styles.text}>{reviewText}</p>
      <div className={styles.bottom_row}>
        <div className={styles.rating_container}>
          <Image
            src="/images/icons/full_heart.svg"
            alt="заполненное сердце"
            width={20}
            height={20}
          />
          <Image
            src="/images/icons/full_heart.svg"
            alt="заполненное сердце"
            width={20}
            height={20}
          />
          <Image
            src="/images/icons/full_heart.svg"
            alt="заполненное сердце"
            width={20}
            height={20}
          />
          <Image
            src="/images/icons/full_heart.svg"
            alt="заполненное сердце"
            width={20}
            height={20}
          />
          <Image
            src="/images/icons/full_heart.svg"
            alt="заполненное сердце"
            width={20}
            height={20}
          />
        </div>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
}
