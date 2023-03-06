import Image from "next/image";
import { SmallButtonLink } from "../Button";
import styles from "./ServiceCard.module.css";

export default function ServiceCard() {
  return (
    <div className="col">
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          src="/images/services/1.png"
          alt="банка с мёдом на столе"
          width={450}
          height={602}
        />
      </div>
      <hr className={styles.divider} />
      <h3 className={styles.title}>
        Расфасовка мёда под вашей торговой маркой
      </h3>
      <div className={styles.button + " " + "row"}>
        <SmallButtonLink href="#">Подробнее</SmallButtonLink>
      </div>
    </div>
  );
}
