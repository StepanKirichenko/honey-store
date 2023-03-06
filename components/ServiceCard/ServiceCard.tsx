import Image from "next/image";
import { SmallButtonLink } from "../Button";
import styles from "./ServiceCard.module.css";

interface Props {
  title: string;
  img: string;
  link: string;
}

export default function ServiceCard({ title, img, link }: Props) {
  return (
    <div className="col">
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          src={img}
          alt={title}
          width={450}
          height={602}
        />
      </div>
      <hr className={styles.divider} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.button + " " + "row"}>
        <SmallButtonLink href={link}>Подробнее</SmallButtonLink>
      </div>
    </div>
  );
}
