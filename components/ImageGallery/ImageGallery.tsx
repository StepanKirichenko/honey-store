import Image from "next/image";
import { useState } from "react";
import styles from "./ImageGallery.module.css";

export default function ImageGallery() {
  const images = [
    "/images/hero_image.png",
    "/images/articles/article_honey_alternative_to_sugar.png",
    "/images/articles/article_honey_in_winter.png",
    "/images/articles/article_honey_with_ginger.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <Image
          key={index}
          className={`${styles.image} ${
            index === currentImage ? styles.current : ""
          }`}
          src={image}
          width={962}
          height={944}
          alt=""
        />
      ))}
      <div className={styles.buttonsHolder}>
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            className={`${styles.button} ${
              i === currentImage ? styles.current : ""
            }`}
            onClick={() => setCurrentImage(i)}
          />
        ))}
      </div>
    </div>
  );
}
